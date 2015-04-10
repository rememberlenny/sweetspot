class AddFeaturedPhotoToStories < ActiveRecord::Migration
  def change
    add_column :stories, :featured_photo, :string
    add_column :stories, :first_slide, :string
  end
end
