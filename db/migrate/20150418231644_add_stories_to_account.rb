class AddStoriesToAccount < ActiveRecord::Migration
  def change
    remove_column :users, :username
    add_column :stories, :account_id, :integer
  end
end
