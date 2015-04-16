class AddFeaturedStoriesToUsers < ActiveRecord::Migration
  def change
    add_column :users, :featured_story, :boolean
  end
end
