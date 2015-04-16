class AddAvatarToProfile < ActiveRecord::Migration
  def change
    add_column :users, :image_id, :string
  end
end
