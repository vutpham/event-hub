class CreateBookmarks < ActiveRecord::Migration[5.0]
  def change
    create_table :bookmarks do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false
      t.timestamps
    end
    add_index :bookmarks, [:user_id, :event_id], unique: true
  end
end
