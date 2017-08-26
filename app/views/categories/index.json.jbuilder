@categories.each do |category|
  json.set! category.id do
    json.set! :id, category.id
    json.set! :name, category.name
  end
end
