class ChangeTypetoInteger < ActiveRecord::Migration
  def change
    remove_column :stories, :featured_photo, :string
    remove_column :stories, :first_slide, :string
    add_column :stories, :featured_photo, :integer
    add_column :stories, :first_slide, :integer
  end
end
