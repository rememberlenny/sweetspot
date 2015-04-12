class AddFeaturedPhotoToStories < ActiveRecord::Migration
  def change
    add_column :stories, :featured_photo, :integer
    add_column :stories, :first_slide, :integer
  end
end
