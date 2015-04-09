class AddHotspotLocation < ActiveRecord::Migration
  def change
    add_column :hotspots, :destination, :string
  end
end
