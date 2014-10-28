class CreateUploads < ActiveRecord::Migration
  def change
    create_table :uploads do |t|
      t.string :upload
      t.text :description
      t.string :content_type
      t.string :file_size
      t.integer :user_id, index: true

      t.timestamps
    end
  end
end
