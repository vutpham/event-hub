class ChangeDefaultImage < ActiveRecord::Migration[5.0]
  def change
    change_column_default(:events, :image_url,
    "http://rocciaevents.com/wp-content/uploads/2014/09/event1.gif")
  end
end
