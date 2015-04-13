class AddDraftsToStories < ActiveRecord::Migration
  def change
    add_column :stories, :draft_id, :integer
    add_column :stories, :published_at, :timestamp
    add_column :stories, :trashed_at, :timestamp
  end
end
