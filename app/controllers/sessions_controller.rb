class SessionsController < ApplicationController
  def connect_fb
    app_id = ''
    app_secret = ''
    session[:oauth] = Koala::Facebook::OAuth.new(app_id, app_secret, sessions_fb_callback_url)
    
    redirect_to session[:oauth].url_for_oauth_code(:permissions => "publish_stream,read_stream")
  end
    
  def fb_callback
    if params[:code].blank?
      redirect_to root_url, :notice => 'You should allow app to connect your Facebook account'
      return
    end
    
    session[:fb_access_token] = session[:oauth].get_access_token(params[:code])
    
    redirect_to root_url, :notice => 'FB Connected!'
  end
end