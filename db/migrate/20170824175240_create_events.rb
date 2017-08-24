class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.text :short_description, null: false
      t.text :full_description, null: false
      t.string :image_url, null: false, default: "default_image.jpg"
      t.date :date, null: false
      t.integer :host_id, null: false
      t.integer :total_quantity
      t.integer :quantity_left
      t.float :price, null: false, default: 0.00, scale: 2
      t.timestamps
    end

    add_index :events, :title
    add_index :events, :date
    add_index :events, :price
    add_index :events, :host_id
  end


end
