class UsersController < ApplicationController
  before_action :set_user, only: [:edit, :update, :destroy, :finish_signup]

  # GET /users/:id.:format
  def show
    # authorize! :read, @user
    if user_signed_in?
      @user = User.find_by uid: params[:id]
    end
  end

  def dash
    @stories = Story.live.includes(:draft).order('updated_at DESC')
  end

  # GET /users/:id/edit
  def edit
    # authorize! :update, @user
  end

  # PATCH/PUT /users/:id.:format
  def update
    # authorize! :update, @user
    respond_to do |format|
      if @user.update(user_params)
        sign_in(@user == current_user ? @user : current_user, :bypass => true)
        format.html { redirect_to @user, notice: 'Your profile was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
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

  # DELETE /users/:id.:format
  def destroy
    # authorize! :delete, @user
    @user.destroy
    respond_to do |format|
      format.html { redirect_to root_url }
      format.json { head :no_content }
    end
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      accessible = [ :email ]
      accessible << [ :name_first,
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
                      :facebook_personal ]
      accessible << [ :password ] unless params[:user][:password].blank?
      if params[:user][:password].blank? && params[:user][:password_confirmation].blank?
          params[:user].delete(:password)
          params[:user].delete(:password_confirmation)
      end
      params.require(:user).permit(accessible)
    end
end
