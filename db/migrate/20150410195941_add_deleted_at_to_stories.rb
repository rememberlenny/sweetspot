class AddDeletedAtToStories < ActiveRecord::Migration
  def change
    add_column :stories, :deleted_at, :datetime
    add_index :stories, :deleted_at
    add_column :films, :deleted_at, :datetime
    add_index :films, :deleted_at
    add_column :photos, :deleted_at, :datetime
    add_index :photos, :deleted_at
    add_column :users, :deleted_at, :datetime
    add_index :users, :deleted_at
    add_column :hotspots, :deleted_at, :datetime
    add_index :hotspots, :deleted_at
  end
end
