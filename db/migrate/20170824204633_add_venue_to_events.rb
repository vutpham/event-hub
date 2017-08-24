class AddVenueToEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :venue, :string
    add_column :events, :address, :string, null: false
  end
end
