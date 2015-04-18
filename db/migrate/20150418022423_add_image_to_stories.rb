class AddImageToStories < ActiveRecord::Migration
  def change
    remove_column :stories, :featured_photo, :integer
    add_column :stories, :image_id, :string
  end
end
