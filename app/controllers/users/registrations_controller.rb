class Users::RegistrationsController < Devise::RegistrationsController
  # PUT /resource
  # We need to use a copy of the resource because we don't want to change
  # the current user in place.
  def update
    if params[:user][:password].blank? && params[:user][:password_confirmation].blank?
        params[:user].delete(:password)
        params[:user].delete(:password_confirmation)
    end
    self.resource = resource_class.to_adapter.get!(send(:"current_#{resource_name}").to_key)
    prev_unconfirmed_email = resource.unconfirmed_email if resource.respond_to?(:unconfirmed_email)

    resource_updated = update_resource(resource, account_update_params)
    yield resource if block_given?
    if resource_updated
      if is_flashing_format?
        flash_key = update_needs_confirmation?(resource, prev_unconfirmed_email) ?
          :update_needs_confirmation : :updated
        set_flash_message :notice, flash_key
      end
      sign_in resource_name, resource, bypass: true
      respond_with resource, location: edit_user_registration_path
    else
      clean_up_passwords resource
      respond_with resource
    end
  end

  protected


  def update_resource(resource, params)
    @user.update_attributes(account_update_params)
  end
end
