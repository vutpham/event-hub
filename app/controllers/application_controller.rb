class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logout

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
    @current_user.nil? ? nil : @current_user
  end

  def login(user)
    user.reset_session_token
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logged_in?
    !!current_user
  end

  def logout
    user.reset_session_token
    session[:session_token] = nil
  end

end
