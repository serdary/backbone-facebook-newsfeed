require 'test_helper'

class SessionsControllerTest < ActionController::TestCase
  test "should get connect_fb" do
    get :connect_fb
    assert_response :success
  end

  test "should get fb_callback" do
    get :fb_callback
    assert_response :success
  end

end
