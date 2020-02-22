class Photo < ApplicationRecord
  mount_uploader :resource, PhotoUploader
  serialize :resource, JSON
  
  belongs_to :user
  belongs_to :album, optional: true
  has_many :comments
  
  def hidden?
    self.hidden
  end
end
