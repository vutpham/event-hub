class SplitAddress < ActiveRecord::Migration[5.0]
  def change
    remove_column :events, :address, :string
    add_column :events, :street_address, :string
    add_column :events, :city_state_zip, :string
  end
end
