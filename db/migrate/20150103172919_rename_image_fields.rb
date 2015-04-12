class RenameImageFields < ActiveRecord::Migration
  def change
    remove_column :films, :image_url, :string
    add_column :films, :image_id, :string
  end
end
