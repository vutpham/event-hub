require 'test_helper'

class Api::UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get api/sessions" do
    get api_users_api/sessions_url
    assert_response :success
  end

end
