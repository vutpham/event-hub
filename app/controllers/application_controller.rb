class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?, :upload_preset, :cloud_name

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

  def log_out
    current_user.reset_session_token
    session[:session_token] = nil
  end

  def cloud_name
    ENV['cloud_name']
  end

  def upload_preset
    ENV['upload_preset']
  end

end
