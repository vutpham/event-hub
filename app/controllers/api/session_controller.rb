class Api::SessionController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username],
                                     params[:user][:password])

    if @user
      login(@user)
      render json: @user
    else
      render json: ["Invalid username/password combination"],
             status: 401
    end
  end

  def destroy
    if logged_in?
      log_out
    else
      render json: ["User not signed in"], status: 404
    end
  end
end
