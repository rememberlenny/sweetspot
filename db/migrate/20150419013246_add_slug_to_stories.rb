class AddSlugToStories < ActiveRecord::Migration
  def change
    add_column :stories, :slug, :string
    add_index :stories, :slug, unique: true
  end
end
