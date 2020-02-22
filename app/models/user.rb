class User < ApplicationRecord
  has_secure_password

  mount_uploader :avatar, AvatarUploader
  serialize :avatar, JSON

  has_many :photos
  has_many :comments
  has_many :albums

  def admin?
    self.admin
  end
end