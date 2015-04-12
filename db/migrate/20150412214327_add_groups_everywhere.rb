class AddGroupsEverywhere < ActiveRecord::Migration
  def change
    add_reference :users,   :groups, index: true
    add_reference :stories, :groups, index: true
  end
end
