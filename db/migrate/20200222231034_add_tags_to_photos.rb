class AddTagsToPhotos < ActiveRecord::Migration[6.0]
  def change
    add_column :photos, :tags, :string
  end
end
