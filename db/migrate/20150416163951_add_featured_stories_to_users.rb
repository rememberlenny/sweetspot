class AddFeaturedStoriesToUsers < ActiveRecord::Migration
  def change
    add_column :stories, :featured_story, :boolean
  end
end
