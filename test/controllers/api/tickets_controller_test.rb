require 'test_helper'

class Api::TicketsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_tickets_create_url
    assert_response :success
  end

end
