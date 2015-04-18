class AddUserPayStatus < ActiveRecord::Migration
  def change
    remove_column :users, :pay_level, :string
    remove_column :users, :pay_start_date, :date
    remove_column :users, :pay_end_date, :date
    add_column :users, :pay_level, :string, :default => 'free'
    add_column :users, :pay_date_start, :date
    add_column :users, :pay_date_end, :date
  end
end
