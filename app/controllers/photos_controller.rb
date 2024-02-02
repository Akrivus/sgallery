class PhotosController < ApplicationController
  before_action :set_photo, only: [:show, :edit, :update, :destroy]

  # GET /photos
  def index
    unless params[:query].blank?
      @photos = Photo.where(hidden: false).where("lower(title) LIKE :query", query: "%#{params[:query].downcase}%")
    else
      @photos = Photo.where(hidden: false)
    end
  end

  # GET /photos/1
  def show
  end

  # GET /photos/new
  def new
    @photo = current_user.photos.new
  end

  # GET /photos/1/edit
  def edit
  end

  # POST /photos
  def create
    @photo = current_user.photos.new(photo_params)
    respond_to do |format|
      if @photo.save
        format.html { redirect_to @photo }
      else
        format.html { render :new }
      end
    end
  end

  # PATCH/PUT /photos/1
  # PATCH/PUT /photos/1.json
  def update
    respond_to do |format|
      if @photo.update(photo_params)
        format.html { redirect_to @photo }
      else
        format.html { render :edit }
      end
    end
  end

  # DELETE /photos/1
  # DELETE /photos/1.json
  def destroy
    @photo.destroy
    respond_to do |format|
      format.html { redirect_to photos_url }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_photo
      @photo = Photo.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def photo_params
      params.require(:photo).permit(:title, :caption, :hidden, :album_id, :image)
    end
end
