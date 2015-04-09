class CreateHotspots < ActiveRecord::Migration
  def change
    create_table :hotspots do |t|
      t.reference :films, index: true
      t.string :location

      t.timestamps null: false
    end
  end
end
