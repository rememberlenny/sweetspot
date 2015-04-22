class UsersController < ApplicationController
  before_filter :authenticate_user!
  before_action :set_user, only: [:edit, :update, :destroy, :finish_signup]

  include Refile::AttachmentHelper

  # GET /users/:id.:format
  def show
    # authorize! :read, @user
    @user = User.friendly.find(params[:id])
    if @user.nil?
      redirect_to root_path
    else
      @featured_stories = Story.where(user_id: @user.id)
    end
  end

  def index
    unless current_user.admin?
      redirect_to :back, :alert => "Access denied."
    end
    @users = User.all
  end

  def dash
    @stories = Story.live.includes(:draft).order('updated_at DESC')
  end

  # GET /users/:id/edit
  def edit
    # authorize! :update, @user
  end

  def update
    @user = User.find(params[:id])
    unless current_user.admin?
      redirect_to :back, :alert => "Access denied."
    end
    if @user.update_attributes(secure_params)
      redirect_to users_path, :notice => "User updated."
    else
      redirect_to users_path, :alert => "Unable to update user."
    end
  end

  # GET/PATCH /users/:id/finish_signup
  def finish_signup
    # authorize! :update, @user
    if request.patch? && params[:user] #&& params[:user][:email]
      if @user.update(user_params)
        @user.skip_reconfirmation!
        sign_in(@user, :bypass => true)
        redirect_to root_url, notice: 'Your profile was successfully updated.'
      else
        @show_errors = true
      end
    end
  end

  def destroy
    user = User.find(params[:id])
    unless current_user.admin?
      redirect_to :back, :alert => "Access denied."
    end
    user.destroy
    redirect_to users_path, :notice => "User deleted."
  end

  private
    def secure_params
      params.require(:user).permit(:role)
    end

    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      accessible = [ :email ]
      accessible << [ :password ] unless params[:user][:password].blank?
      if params[:user][:password].blank? && params[:user][:password_confirmation].blank?
          params[:user].delete(:password)
          params[:user].delete(:password_confirmation)
      end
      params.require(:user).permit(accessible)
    end
end
