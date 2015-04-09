class CreateHotspots < ActiveRecord::Migration
  def change
    create_table :hotspots do |t|
      t.string :location

      t.timestamps null: false
    end
    add_reference :hotspots,  :film, index: true
  end
end
