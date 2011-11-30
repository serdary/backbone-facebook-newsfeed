class FeedsController < ApplicationController
  def index
    unless session[:fb_access_token]
      render :json => nil
      return
    end
    
    begin
      graph = Koala::Facebook::API.new(session[:fb_access_token])
      
      result = graph.get_connections('me', 'home')
      feeds = create_feed_objects(result)

    rescue Exception => ex
      session[:fb_access_token] = nil
      logger.error "Exception - #{ex}"
    end
    
    render :json => feeds
  end

  def create
    return unless session[:fb_access_token]
    
    begin
      graph = Koala::Facebook::API.new(session[:fb_access_token])
      obj_id = graph.put_wall_post(params[:feed][:message])
      
      #feed = create_feed_objects(graph.get_object(obj_id))[0]
      feed = {}
    rescue Exception => ex
      session[:fb_access_token] = nil
      logger.error "Exception - #{ex}"
    end
    
    render :json => feed
  end
  
  private
  
  def create_feed_objects(result)
    feeds = []
    result.each do |feed|
      from_name = feed['from'].is_a?(Hash) ? feed['from']['name'] : ''
      from_id = feed['from'].is_a?(Hash) ? feed['from']['id'] : ''
      like_count = feed['likes'].is_a?(Hash) ? feed['likes']['count'] : 0
      message = (feed['type'] == 'link' or feed['message'].blank?) ? feed['story'] : feed['message']
      
      feeds.push({ :id => feed['id'], :from_name => from_name, :from_id => from_id, :like_count => like_count, 
        :feed_type => feed['type'], :message => message })
    end
    feeds
  end
end