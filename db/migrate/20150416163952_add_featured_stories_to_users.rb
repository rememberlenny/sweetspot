class AddFeaturedStoriesToUsers < ActiveRecord::Migration
  def change
    remove_column :stories, :featured_story, :boolean
    add_column :stories, :featured_story, :boolean, default: false
  end
end
