class AddUserPayStatus < ActiveRecord::Migration
  def change
    add_column :users, :pay_level, :string, :default => 'free'
    add_column :users, :pay_date_start, :date
    add_column :users, :pay_date_end, :date
  end
end
