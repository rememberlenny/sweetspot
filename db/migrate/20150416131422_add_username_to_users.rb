class AddUsernameToUsers < ActiveRecord::Migration
  def change
    add_column :users, :username, :string
    add_index  :users, :username, unique: true
    add_column :users, :name_first, :string
    add_column :users, :name_last, :string
    add_column :users, :account_type, :string
    add_column :users, :location, :string
    add_column :users, :biography, :text
    add_column :users, :postal_address, :text
    add_column :users, :disqus, :string
    add_column :users, :website_personal, :string
    add_column :users, :email_personal, :string
    add_column :users, :instagram_personal, :string
    add_column :users, :twitter_personal, :string
    add_column :users, :flickr_personal, :string
    add_column :users, :facebook_personal, :string
  end
end
