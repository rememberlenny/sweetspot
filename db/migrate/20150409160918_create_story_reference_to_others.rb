class CreateStoryReferenceToOthers < ActiveRecord::Migration
  def change
    add_reference :films,  :story, index: true
    add_reference :actors, :story, index: true
  end
end
