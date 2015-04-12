class RemoveUnusedTables < ActiveRecord::Migration
  def change
    drop_table :actors do |t|
    end
    drop_table :actor_films do |t|
    end
    drop_table :comments do |t|
    end
  end
end
