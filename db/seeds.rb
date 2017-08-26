# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "user1", password: "password")
user2 = User.create(username: "user2", password: "password")
user3 = User.create(username: "user3", password: "password")
user4 = User.create(username: "user4", password: "password")
user5 = User.create(username: "user5", password: "password")
DemoUser = User.create(username: "Stranger", password: "password")

event1 = Event.create(title: "NBA Finals Game 7",
                      short_description: "Warriors vs. Cavs",
                      full_description: "Watch as Steph Curry takes on Lebron James in the epic ending to a trilogy.",
                      image_url: "http://a.espncdn.com/combiner/i?img=%2Fphoto%2F2015%2F0516%2Fnba_split1x_1296x729.jpg",
                      date: "06/06/2016",
                      price: 300.00,
                      venue: "Oracle Arena",
                      street_address: "7000 Coliseum Way",
                      city_state_zip: "Oakland, CA 94621",
                      host_id: 1)

#CATEGORY SEEDSCa

Sports = Category.create(name: "Sports")
Music = Category.create(name: "Music")
Arts = Category.create(name: "Arts")
Business = Category.create(name: "Business")
Parties = Category.create(name: "Parties")
Classes = Category.create(name: "Classes")
Food = Category.create(name: "Food & Drink")
Other = Category.create(name: "Other")

#EVENT_CATEGORY_SEEDS

event1category = EventCategory.create(event_id: 1, category_id: 1)
