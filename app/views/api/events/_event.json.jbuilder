json.extract! event, :id, :title, :full_description,
                     :image_url, :date, :host_id, :total_quantity,
                     :quantity_left, :price, :venue, :street_address,
                     :city_state_zip
json.set! :host, host
json.set! :categories, (event.categories.map{|category| category.name})

if current_user
  bookmarked = current_user.bookmarked_events.include?(event)
else
  bookmarked = false
end

json.set! :bookmarked, bookmarked
