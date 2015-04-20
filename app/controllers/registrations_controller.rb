class RegistrationsController < Devise::RegistrationsController
  include Payola::StatusBehavior

  def create
    build_resource(sign_up_params)
    plan = Plan.find_by!(id: params[:user][:plan_id].to_i)
    resource.role = User.roles[plan.stripe_id] unless resource.admin?
    resource.save
    yield resource if block_given?
    if resource.persisted?
      if resource.active_for_authentication?
        set_flash_message :notice, :signed_up if is_flashing_format?
        sign_up(resource_name, resource)
        subscribe
      else
        set_flash_message :notice, :"signed_up_but_#{resource.inactive_message}" if is_flashing_format?
        expire_data_after_sign_in!
        subscribe
      end
    else
      clean_up_passwords resource
      render json:
        {error: resource.errors.full_messages.to_sentence},
        status: 400
    end
  end

  private

  def sign_up_params
    params.require(:user).permit(:email,
    :password, :password_confirmation, :plan_id)
  end

  def subscribe
    return if resource.admin?
    params[:plan] = current_user.plan
    subscription = Payola::CreateSubscription.call(params, current_user)
    render_payola_status(subscription)
  end

end
