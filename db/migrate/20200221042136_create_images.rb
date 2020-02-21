class CreateImages < ActiveRecord::Migration[6.0]
  def change
    create_table :images do |t|
      t.string :title
      t.string :caption
      t.string :resource

      t.timestamps
    end
  end
end
