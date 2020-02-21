class User < ApplicationRecord
  has_secure_password

  has_many :photos
  has_many :comments
  has_many :albums

  def admin?
    self.admin
  end
end