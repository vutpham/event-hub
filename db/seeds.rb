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
                      date: "06/06/2017",
                      price: 300.00,
                      venue: "Oracle Arena",
                      street_address: "7000 Coliseum Way",
                      city_state_zip: "Oakland, CA 94621",
                      host_id: 1)

event2 = Event.create(title: "Pancakes & Booze Art Show",
                      short_description: "The San Francisco Pancakes & Booze Art Show",
                      full_description: "San Francisco's Largest Underground Art Show featuring:\n
                        -100+ Emerging Artists
                        -Live Body Painting
                        -Live DJ sets
                        -Live Art
                        -FREE Pancake Bar
                        -21+ EVENT
                        $20 Line Jumper (limited quantities)
                        $10 Door",
                      image_url: "https://i1.wp.com/secretsofvenusblog.files.wordpress.com/2016/08/14064092_10154404933654144_6540644930333295270_n.jpg?w=816&h=302&crop&ssl=1",
                      date: "08/11/2017",
                      price: 300.00,
                      venue: "Mezzanine",
                      street_address: "444 Jessie St.",
                      city_state_zip: "San Francisco, CA 94105",
                      host_id: 1)

event3 = Event.create(title: "Outside Lands",
                      short_description: "2017 commemorates the 10th Anniversary of Outside Lands, a Bay Area celebration of Music, Food, Wine, ",
                      full_description: "The 10th annual Outside Lands Festival will take place in San Francisco’s historic Golden Gate Park August 11 – 13. Festival organizers Another Planet Entertainment, Superfly and Starr Hill have just detailed the lineup for this year’s event which will be headlined by The Who, Metallica and Gorillaz. Lorde, Fleet Foxes, Queens of the Stone Age, alt-J, Solange, A Tribe Called Quest, Little Dragon, Belle and Sebastian, The Avett Brothers, Above & Beyond, Tove Lo, Action Bronson and Thundercat join the headliners at the top of this year’s lineup. Rebelution, Dawes, Real Estate, Temples, Warpaint, Khruangbin, Lee Fields & The Expressions and Lawrence are also among the acts confirmed for Outside Lands ’17.",
                      image_url: "http://hotelabrisf.com/files/2013/07/outside-lands1.jpg",
                      date: "08/11/2017",
                      price: 500.00,
                      venue: "Golden Gate Park",
                      street_address: "501 Stanyan St",
                      city_state_zip: "San Francisco, CA 94117-1898",
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
