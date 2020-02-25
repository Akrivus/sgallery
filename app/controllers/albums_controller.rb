class AlbumsController < ApplicationController
  before_action :set_album, only: [:show, :edit, :update, :destroy]

  # GET /users/1/albums
  def index
    @albums = Album.all
  end

  # GET /users/1/albums/1
  def show

  end

  # GET /users/1/albums/new
  def new
    @album = Album.new
  end

  # GET /users/1/albums/1/edit
  def edit

  end

  # POST /users/1/albums
  def create
    @album = Album.new(album_params)
    respond_to do |format|
      if @album.save
        format.html { redirect_to current_user }
      else
        format.html { render :new }
      end
    end
  end

  # PATCH/PUT /users/1/albums/1
  def update
    respond_to do |format|
      if @album.update(album_params)
        format.html { redirect_to @album }
      else
        format.html { render :edit }
      end
    end
  end

  # DELETE /users/1/albums/1
  def destroy
    @album.destroy
    respond_to do |format|
      format.html { redirect_to user_albums_url }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_album
      @album = Album.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def album_params
      params.require(:album).permit(:title, :user_id)
    end
end
