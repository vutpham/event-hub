@events.each do |event|
  json.set! event.id do
    json.set! :title, event.title
    json.set! :image_url, event.image_url
    json.set! :date, event.date
    json.set! :venue, event.venue
  end
end
