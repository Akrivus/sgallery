class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :image
  belongs_to :comment, optional: true
end
