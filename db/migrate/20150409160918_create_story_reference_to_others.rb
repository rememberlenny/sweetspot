class CreateStoryReferenceToOthers < ActiveRecord::Migration
  def change
    add_reference :films,  :story, index: true
  end
end
