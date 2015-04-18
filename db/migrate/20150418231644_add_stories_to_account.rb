class AddStoriesToAccount < ActiveRecord::Migration
  def change
    add_column :stories, :account_id, :integer
  end
end
