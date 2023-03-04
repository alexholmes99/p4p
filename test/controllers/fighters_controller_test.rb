require "test_helper"

class FightersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fighters_index_url
    assert_response :success
  end
end
