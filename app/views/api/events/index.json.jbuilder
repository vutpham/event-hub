@events.each do |event|
  json.set! event.id do
    json.set! :id, event.id
    json.set! :title, event.title
    json.set! :image_url, event.image_url
    json.set! :price, event.price
    json.set! :date, event.date
    json.set! :venue, event.venue
    json.set! :bookmarked, (@bookmarked_events.include?(event))
    json.set! :street_address, event.street_address
    json.set! :city_state_zip, event.city_state_zip
  end
end
