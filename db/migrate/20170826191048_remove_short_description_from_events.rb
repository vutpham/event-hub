class RemoveShortDescriptionFromEvents < ActiveRecord::Migration[5.0]
  def change
    remove_column :events, :short_description
  end
end
