class PhotoUploader < CarrierWave::Uploader::Base
  storage :fog
  
  def extension_white_list
    %w( jpg jpeg jfif png webp gif )
  end
  def default_url(*args)
    '/images/avatar.jpg'
  end
end
