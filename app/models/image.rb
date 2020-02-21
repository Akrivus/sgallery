class Image < ApplicationRecord
  belongs_to :user
  belongs_to :album, optional: true
  has_many :comments
end
