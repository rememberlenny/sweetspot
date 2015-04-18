class AddFeaturedStoriesToUsers < ActiveRecord::Migration
  def change
    add_column :stories, :featured_story, :boolean, default: false
  end
end
