class ApplicationController < ActionController::Base
  before_filter :authorize
  protect_from_forgery
  
  protected
  
  def authorize
    is_user_logged_in
    # TODO: redirect to root_url if not authorized
  end
  
  private
  
  def is_user_logged_in
    @user_logged_in = session[:fb_access_token] != nil
  end
end
