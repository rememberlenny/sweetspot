class AddUserPayStatus < ActiveRecord::Migration
  def change
    add_column :users, :pay_level, :string
    add_column :users, :pay_start_date, :date
    add_column :users, :pay_end_date, :date
  end
end
