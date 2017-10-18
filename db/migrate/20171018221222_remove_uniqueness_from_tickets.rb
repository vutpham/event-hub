class RemoveUniquenessFromTickets < ActiveRecord::Migration[5.0]
  def change
    remove_index :tickets, [:user_id, :event_id]
    add_index :tickets, :user_id
    add_index :tickets, :event_id
  end
end
