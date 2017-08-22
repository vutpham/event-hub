class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    elsif @user.errors
      render json: @user.errors.full_messages, status: 422
    else
      render json: ["Username already taken"], status: 400
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
