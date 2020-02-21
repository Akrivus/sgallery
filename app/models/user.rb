class User < ApplicationRecord
  has_many :images
  has_many :comments
  has_many :albums

  def admin?
    self.admin
  end
end