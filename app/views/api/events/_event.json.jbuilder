json.extract! event, :id, :title, :full_description,
                     :image_url, :date, :host_id, :total_quantity,
                     :quantity_left, :price, :venue, :street_address,
                     :city_state_zip
json.set! :host, host
