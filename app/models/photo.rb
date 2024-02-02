class Photo < ApplicationRecord
  belongs_to :user
  belongs_to :album, optional: true

  has_one_attached :image

  has_many :comments, dependent: :destroy

  validates :title, length: { in: 1..50 }
  validates :caption, length: { in: 1..100 }

  def hidden?
    self.hidden
  end
end
