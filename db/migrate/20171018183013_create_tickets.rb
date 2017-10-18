class CreateTickets < ActiveRecord::Migration[5.0]
  def change
    create_table :tickets do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false

      t.timestamps
    end
    add_index :tickets, [:user_id, :event_id], unique: true
  end
end
