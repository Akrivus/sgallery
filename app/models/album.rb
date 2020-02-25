class Album < ApplicationRecord
  belongs_to :user
  has_many :photos, dependent: :nullify

  validates :title, presence: true, length: { in: 1..50 }
end
