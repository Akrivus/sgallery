class User < ApplicationRecord
  has_secure_password

  mount_uploader :avatar, AvatarUploader
  serialize :avatar, JSON

  has_many :photos
  has_many :comments
  has_many :albums

  validates :email, uniqueness: true, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP } 
  validates :name, presence: true, length: { in: 2..50 }
  validates :password, presence: true, length: { in: 8..48 }

  def admin?
    self.admin
  end
end