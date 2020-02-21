class User < ApplicationRecord
  has_many :images
  has_many :comments
  has_many :albums
end

# TODO: permission stack/methods
