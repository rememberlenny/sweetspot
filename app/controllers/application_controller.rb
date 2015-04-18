class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  # before_action :authenticate_user!
  before_action :set_account

  before_filter :ensure_signup_complete, only: [:new, :create, :update]
  before_action :configure_devise_permitted_parameters, if: :devise_controller?

  rescue_from CanCan::AccessDenied do |exception|
    redirect_to root_url, :alert => exception.message
  end

  def set_account
    @account = Account.find_by(subdomain: request.subdomain)
  end

  protected

  def configure_devise_permitted_parameters
    registration_params = [
                            :name_first,
                            :name_last,
                            :account_type,
                            :location,
                            :biography,
                            :postal_address,
                            :disqus,
                            :website_personal,
                            :email_personal,
                            :instagram_personal,
                            :twitter_personal,
                            :flickr_personal,
                            :facebook_personal,
                            :username,
                            :email,
                            :password,
                            :image,
                            :image_id,
                            :image_cache_id,
                            :remove_image,
                            account_attributes: [:subdomain]
                          ]

    if params[:action] == 'update'
      devise_parameter_sanitizer.for(:account_update) {
        |u| u.permit(registration_params << :current_password)
      }
    elsif params[:action] == 'create'
      devise_parameter_sanitizer.for(:sign_up) {
        |u| u.permit(registration_params)
      }
    end
  end

  def ensure_signup_complete
    # Ensure we don't go into an infinite loop
    return if action_name == 'finish_signup'

    # Redirect to the 'finish_signup' page if the user
    # email hasn't been verified yet
    if current_user && !current_user.email_verified?
      redirect_to finish_signup_path(current_user)
    end
  end
end
