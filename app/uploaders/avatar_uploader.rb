class AvatarUploader < CarrierWave::Uploader::Base
  storage :fog

  def default_url(*args)
    '/images/avatar.jpg'
  end
end
