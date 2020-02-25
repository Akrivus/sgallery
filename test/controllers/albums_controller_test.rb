require 'test_helper'

class AlbumsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @album = albums(:one)
  end

  test "should get index" do
    get user_albums_url
    assert_response :success
  end

  test "should get new" do
    get new_user_album_url
    assert_response :success
  end

  test "should create album" do
    assert_difference('Album.count') do
      post user_albums_url, params: { album: { title: @album.title } }
    end

    assert_redirected_to user_album_url(Album.last)
  end

  test "should show album" do
    get user_album_url(@album)
    assert_response :success
  end

  test "should get edit" do
    get edit_user_album_url(@album)
    assert_response :success
  end

  test "should update album" do
    patch user_album_url(@album), params: { album: { title: @album.title } }
    assert_redirected_to user_album_url(@album)
  end

  test "should destroy album" do
    assert_difference('Album.count', -1) do
      delete user_album_url(@album)
    end

    assert_redirected_to user_albums_url
  end
end
