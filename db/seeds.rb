# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create(username: "user1", password: "password")
user2 = User.create(username: "user2", password: "password")
user3 = User.create(username: "user3", password: "password")
user4 = User.create(username: "user4", password: "password")
user5 = User.create(username: "user5", password: "password")
DemoUser = User.create(username: "Stranger", password: "password")

Category.destroy_all

Sports = Category.create!(name: "Sports") #1
Music = Category.create!(name: "Music") #2
Arts = Category.create!(name: "Arts") #3
Business = Category.create!(name: "Business") #4
Parties = Category.create!(name: "Parties") #5
Classes = Category.create!(name: "Classes") #6
Food = Category.create!(name: "Food & Drink") #7
Other = Category.create!(name: "Other")

Event.destroy_all
EventCategory.destroy_all
Bookmark.destroy_all
Ticket.destroy_all

event1 = Event.create!(title: "Warriors vs. Cavs NBA Finals Game 7",
                      full_description: "Watch as Steph Curry takes on Lebron James in the epic ending to a trilogy.",
                      image_url: "http://a.espncdn.com/combiner/i?img=%2Fphoto%2F2015%2F0516%2Fnba_split1x_1296x729.jpg",
                      date: "2017/06/06",
                      price: 300.00,
                      venue: "Oracle Arena",
                      street_address: "7000 Coliseum Way",
                      city_state_zip: "Oakland, CA 94621",
                      host_id: User.find_by(username: "user2").id)

event2 = Event.create!(title: "Pancakes & Booze Art Show",
                      full_description: "San Francisco's Largest Underground Art Show featuring:\n
                        -100+ Emerging Artists\n
                        -Live Body Painting\n
                        -Live DJ sets\n
                        -Live Art\n
                        -FREE Pancake Bar\n
                        -21+ EVENT\n
                        $20 Line Jumper (limited quantities)\n
                        $10 Door",
                      date: "2017/08/27",
                      image_url: "https://i1.wp.com/secretsofvenusblog.files.wordpress.com/2016/08/14064092_10154404933654144_6540644930333295270_n.jpg?w=816&h=302&crop&ssl=1",
                      venue: "Mezzanine",
                      street_address: "444 Jessie St.",
                      city_state_zip: "San Francisco, CA 94105",
                      host_id: User.find_by(username: "user1").id)

EventCategory.create!(event_id: event2.id, category_id: Parties.id)
EventCategory.create!(event_id: event2.id, category_id: Music.id)
EventCategory.create!(event_id: event2.id, category_id: Food.id)

event3 = Event.create!(title: "Outside Lands",
                      full_description: "The 10th annual Outside Lands Festival will take place in San Francisco’s historic Golden Gate Park August 11 – 13. Festival organizers Another Planet Entertainment, Superfly and Starr Hill have just detailed the lineup for this year’s event which will be headlined by The Who, Metallica and Gorillaz. Lorde, Fleet Foxes, Queens of the Stone Age, alt-J, Solange, A Tribe Called Quest, Little Dragon, Belle and Sebastian, The Avett Brothers, Above & Beyond, Tove Lo, Action Bronson and Thundercat join the headliners at the top of this year’s lineup. Rebelution, Dawes, Real Estate, Temples, Warpaint, Khruangbin, Lee Fields & The Expressions and Lawrence are also among the acts confirmed for Outside Lands ’17.",
                      image_url: "http://hotelabrisf.com/files/2013/07/outside-lands1.jpg",
                      date: "2017/8/11/",
                      price: 500.00,
                      venue: "Golden Gate Park",
                      street_address: "501 Stanyan St",
                      city_state_zip: "San Francisco, CA 94117-1898",
                      host_id: user3.id)

EventCategory.create!(event_id: event3.id, category_id:Music.id)
EventCategory.create!(event_id: event3.id, category_id:Food.id)

event4 = Event.create!(title: "Imagine Dragons Evolve Tour",
                      full_description: "Evolve (stylized as ƎVOLVE) is the upcoming third studio album by American rock band Imagine Dragons, scheduled to be released on June 23, 2017 through KIDinaKORNER and Interscope Records. The album is the band's new material follow-up to their second studio album, Smoke + Mirrors. After the release of Smoke + Mirrors and its respective world tour, a self-imposed hiatus for 2016 and cryptic messages from the band through their social media gained anticipation for their third album. The album was finally announced on May 9, with the initiation of the album's pre-order. In comparison to Night Visions and Smoke + Mirrors, frontman Dan Reynolds explained that the album will be an 'evolution for Imagine Dragons'.",
                      image_url: "http://www.amwaycenter.com/assets/img/ImagineDragons_WEB_EventImage-897067549b.jpg",
                      date: "2017/08/11",
                      price: 50.00,
                      venue: "Shoreline Amphitheatre",
                      street_address: "1 Amphitheatre Parkway",
                      city_state_zip: "Mountain View, CA, US",
                      host_id: user3.id)

EventCategory.create!(event_id: event4.id, category_id:Music.id)

event5 = Event.create!(title: "Bruno Mars: 24K Magic World Tour",
                      full_description: "The North American leg will follow kicking off July 15 at T-Mobile Arena in Las Vegas and then visit over 45 cities across the U.S. including three stops in Northern California including dates at Golden 1 Center in Sacramento Tuesday, July 18. For complete details, please visit The 24K Magic World Tour official homepage at http://www.brunomars.com. Tickets for The 24K Magic World Tour, produced by Live Nation, go on sale 10am on Monday, November 21. The 24K Magic World Tour celebrates Mars' eagerly anticipated new album, 24K Magic, set to arrive worldwide on Friday, November 18 on Atlantic Records. Pre-orders are available now via the Bruno Mars Official Store, with all pre-orders from the store receiving early access to tickets for The 24K Magic Tour.",
                      image_url: "http://www.talkingstickresortarena.com/assets/img/BrunoED-a5505a5715.jpg",
                      date: "2017/6/18/",
                      price: 75.00,
                      venue: "Golden 1 Center",
                      street_address: "500 David J Stern Walk",
                      city_state_zip: "Sacremento, CA 95814",
                      host_id: user3.id)

EventCategory.create!(event_id: event5.id, category_id:Music.id)

event6 = Event.create!(title: "Ed Sheeran: The Divide World Tour",
                      full_description: "2017 sees Ed Sheeran taking his blockbuster studio album Divide on tour across North America. The British artist's status as one of the biggest singer-songwriters out at the moment is certainly cemented in this, his third album, which contains the mega-hit singles Shape Of You, and Castle On The Hill. It's seen him topping the charts across the world and infuses his delicate, acoustic pop with even more pronounced R&B flourishes.",
                      image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Divide_cover.png/220px-Divide_cover.png",
                      date: "2017/6/18/",
                      price: 35.00,
                      venue: "Oracle Arena",
                      street_address: "70000 Coliseum Way",
                      city_state_zip: "Oakland, CA 95814",
                      host_id: user3.id)

EventCategory.create!(event_id: event6.id, category_id:Music.id)

event7 = Event.create!(title: "Cazzette Live",
                      full_description: "SELECT Entertainment welcomes back one of favorite residents, CAZZETTE, to Love + Propaganda on July 21st! The last two shows with Cazzette have sold out and we expect this show to be just as big! Cazzette have built up a solid track record of doing things their own way. With a reputation for topping the Billboard Dance Charts, frequenting Hype Machines top 10 and more than 220m collective streams to their name, the Stockholm-based duo continues to blend genres and burst comfort zones across the board with their highly evolved take on the modern dance landscape. Opening set by Waev. For table reservations email infoselectsf@gmail.com or call 650.274.5736 21+",
                      image_url: "http://djrankings.org/tpls/dj/images/djs_logo/CAZZETTE_logo.jpg",
                      date: "2017/6/21",
                      price: 35.00,
                      venue: "Love & Propaganda",
                      street_address: "85 Campton Place",
                      city_state_zip: "San Francisco, CA 94108",
                      host_id: user3.id)

EventCategory.create!(event_id: event7.id, category_id:Music.id)

event8 = Event.create!(title: "Chocolate and Art Show",
                      full_description: "We would like to cordially invite you to Chocolate and Art Show San Francisco, Thursday June 22th, and Friday June 23th. Indulge yourself in some of SF's finest up-and-coming artists, photographers and creators! There is something for every body including live body painting, vendors, live music, face-painting, and free chocolate!",
                      image_url: "http://i65.tinypic.com/dzjgg8.jpg",
                      date: "2017/6/23",
                      price: 10.00,
                      venue: "SOMAArts Cultural Center",
                      street_address: "934 Brannan Street",
                      city_state_zip: "San Francisco, CA 94103",
                      host_id: User.find_by(username: "user2").id)

EventCategory.create!(event_id: event8.id, category_id:Arts.id)
EventCategory.create!(event_id: event8.id, category_id:Food.id)


event9 = Event.create!(title: "Fillmore Jazz Festival",
                      full_description: "From sunup to sundown, visitors can groove to the sounds of live music from multiple stages, browse the offerings of over 12 blocks of fine art and crafts and enjoy gourmet food and beverages. Asian to Cajun, paintings to pottery, old favorites and new directions, the Fillmore Jazz Festival is not to be missed.",
                      image_url: "https://cdn.sfstation.com/wp-content/uploads/2016/06/jazz-fest-fillmore.jpg",
                      date: "2017/7/1",
                      venue: "Filmore District",
                      price: 15,
                      street_address: "Filmore St and Geary St",
                      city_state_zip: "San Francisco, CA 94115",
                      host_id: User.find_by(username: "user2").id)

EventCategory.create!(event_id: event9.id, category_id:Music.id)
EventCategory.create!(event_id: event9.id, category_id:Parties.id)

event10 = Event.create!(title: "San Francisco Shakespeare Fesitval",
                      full_description: "Local and national playwrights and professional directors, dramaturgs and designers work with the Bay Area’s top actors to engage in an in-depth development process of six new plays. The work leads to two public staged readings of each play.",
                      image_url: "https://static1.squarespace.com/static/52783d40e4b09dc8b95e64f7/t/5318d4f3e4b0c6f4c17d26b6/1394136308599/replace-this.png?format=500w",
                      date: "2017/7/25",
                      venue: "San Francisco Shakespeare",
                      street_address: "1560 Davidson Ave",
                      city_state_zip: "San Francisco, CA 94125",
                      host_id: user4.id)

EventCategory.create!(event_id: event10.id, category_id: Arts.id)


event11 = Event.create!(title: "San Francisco Marathon",
                      full_description: %Q(Enjoy the amazing city of San Francisco by taking part in one of the world's great marathons. The USAT&F Certified course is a "best of San Francisco" tour and includes a loop over the Golden Gate Bridge. Choose from running the marathon, half marathon, progressive marathon, 5K run/walk races or really take on the challenge with the “Worth the Hurt” 52.4 double marathon.),
                      image_url: "http://sfappeal.com/wp-content/uploads/2014/07/sfmarathon.jpg",
                      date: "2017/7/23",
                      venue: "Ferry Building",
                      street_address: "One Ferry Building",
                      city_state_zip: "San Francisco, CA 94111",
                      host_id: User.find_by(username: "user2").id)

EventCategory.create!(event_id: event11.id, category_id:Sports.id)

event12 = Event.create!(title: "Japan Film Festival of San Francisco",
                      full_description: %Q(Japan Film Festival of San Francisco is the first and only fully dedicated annual Japanese film event in the San Francisco Bay Area. Showcasing the latest in anime, live-action and documentaries straight from Japan, this week-long festival will take place in San Francisco's historic Japantown.),
                      image_url: "https://mercurycinema.org.au/wp-content/uploads/JFF-Banner.jpg",
                      date: "2017/7/31",
                      venue: "New People Cinema",
                      price: 10,
                      street_address: "1746 Post Street",
                      city_state_zip: "San Francisco, CA 94115",
                      host_id: DemoUser.id)

EventCategory.create!(event_id: event12.id, category_id:Arts.id)

event13 = Event.create!(title: "Fourth of July Waterfront Festival",
                      full_description: %Q(Dazzling fireworks, local bands, food, arts and crafts ignite this annual waterfront party. Fireworks begin around 9:30 p.m. Dress warmly.),
                      image_url: "https://coffeemeetsbagel.com/blog/wp-content/uploads/2013/07/san-fransisco-firework1.jpg",
                      date: "2017/7/4",
                      venue: "Pier 39",
                      street_address: "Beach Street and The Embarcadero",
                      city_state_zip: "San Francisco, CA 94133",
                      host_id: User.find_by(username: "user2").id)

EventCategory.create!(event_id: event13.id, category_id:Parties.id)

event14 = Event.create!(title: "Giants vs. Marlins",
                      full_description: %Q(The San Francisco Giants take on the Miami Marlins in this MLB matchup at AT&T Park.),
                      image_url: "http://www.jakessteaks.net/js/wp-content/uploads/San-Francisco.jpg",
                      date: "2017/7/23",
                      venue: "AT&T Parkway",
                      price: 40,
                      street_address: "24 Willie Mays Plaza",
                      city_state_zip: "San Francisco, CA 94107",
                      host_id: user4.id)

EventCategory.create!(event_id: event14.id, category_id:Sports.id)

event15 = Event.create!(title: "49ers vs. Panthers",
                      full_description: %Q(Come out to opening night, when the San Francisco 49ers take on the Carolina Panthers.),
                      image_url: "http://images.tritondigitalcms.com/6616/sites/190/2016/01/24140604/49ers-web-sized1.jpg",
                      date: "2017/9/10",
                      venue: "Levi Stadium",
                      price: 65,
                      street_address: "4900 Marie P DeBartolo Way",
                      city_state_zip: "Santa Clara, CA 95054",
                      host_id: user3.id)

EventCategory.create!(event_id: event15.id, category_id:Sports.id)

event16 = Event.create!(title: "The Design Gurus Summit",
                      full_description: %Q(Come learn from top Silicon Valley designers, thinkers and thought leaders who will share their insights on topics including product design, user experience design, design for emerging platforms, branding, marketing, creativity, entrepreneurship, design-driven startups, creative inspiration, and more.
                      A full-day event of both keynotes and panels from 8:30 am to 5:00 pm. This year we have upgraded to the beautiful Kanbar Hall at the San Francisco Jewish Community Center. This is a world-class facility with a true stage and a professional audio visual team.),
                      image_url: "https://cdn.evbuc.com/eventlogos/130900195/dgslogo.png",
                      date: "2017/9/19",
                      venue: "JCCSF",
                      price: 185,
                      street_address: "3200 California Street",
                      city_state_zip: "San Francisco, CA 94118",
                      host_id: DemoUser.id)

EventCategory.create!(event_id: event16.id, category_id:Business.id)

event17 = Event.create!(title: "2017 CRE // Tech Intersect San Francisco",
                      full_description: %Q(CRE// Tech is the center of innovation for the commercial real estate industry. We are committed to bringing innovation and connectivity to the commercial real estate and technology sectors.),
                      image_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F29494837%2F53695618534%2F1%2Foriginal.jpg?h=150&w=300&rect=12%2C0%2C2000%2C1000&s=2af7881361dcea0ff6eb06a0aa1ba131",
                      date: "2017/6/08",
                      venue: "One Jones SF",
                      price: 185,
                      street_address: "1 Jones Street",
                      city_state_zip: "San Francisco, CA 94102",
                      host_id: DemoUser.id)

EventCategory.create!(event_id: event17.id, category_id:Business.id)

event18 = Event.create!(title: "AI & The Future of Privacy",
                      full_description: %Q(Join us for this 3-night after work series to learn how to create! respectful, accessible, and secure experiences for the technology of the future. We've been meeting with AI engineers, hardware developers, security experts, hackers, and designers to assemble our program. Stay tuned as we add to our lineup. ),
                      image_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F31138076%2F1048074523%2F1%2Foriginal.jpg?h=150&w=300&rect=0%2C49%2C1920%2C960&s=d1bd155ffbcd6d4bd2ededfc69312fbd",
                      date: "2017/7/10",
                      venue: "Galvanize",
                      price: 125,
                      street_address: "44 Tehama St",
                      city_state_zip: "San Francisco, CA 94107",
                      host_id: DemoUser.id)

EventCategory.create!(event_id: event18.id, category_id:Business.id)
EventCategory.create!(event_id: event18.id, category_id:Classes.id)

event19 = Event.create!(title: "San Francisco Career Fair & Job Fair",
                      full_description: %Q(The 18th Annual San Francisco Career Fair - Sales & Professional Job Fair
Wednesday - July 26,2017 **11:30 am-2:00pm in Burlingame
Meet, sit down and interview with Fortune 500 employers at The San Francisco Sales & Professional Career Fair. Professional Dress (suit & tie or business suit) Bring plenty of resumes.
Industries represented at our Career Fairs: Sales, Inside Sales, Outside Sales, Retail, Financial, B2B Sales, Customer Service, Healthcare, Industrial, Consulting, Customer Service, Security Sales, Pharmaceutical, Recruiting, Insurance, Retail, Telecommunications, Logistics, Solar, Marketing, Management, Medical Device and more ),
                      image_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F26155763%2F72054276821%2F1%2Foriginal.jpg?w=800&rect=23%2C0%2C1302%2C651&s=189277e2b92dd8902b81e95abe2addad",
                      date: "2017/7/26",
                      venue: "Embassy Suites By Hilton, SF ",
                      street_address: "150 Anza Blvd",
                      city_state_zip: "Burlingame, Ca 94104",
                      host_id: User.find_by(username: "user2").id)

EventCategory.create!(event_id: event19.id, category_id:Business.id)

event20 = Event.create!(title: "The Renegade Craft Fair",
                      full_description: "The best makers of handmade goods from the Bay Area and beyond assemble for this free-to-attend marketplace for indie-craft culture, featuring interactive workshops.",
                      image_url: "http://www.renegadecraft.com/wp-content/themes/renegade/images/facebook_logo.png",
                      date: "2017/7/15",
                      venue: "Fort Mason Center",
                      street_address: "2 Marina Blvd",
                      city_state_zip: "San Francisco, CA 94123",
                      host_id: user4.id)

EventCategory.create!(event_id: event20.id, category_id:Arts.id)


#EVENT_CATEGORY_SEEDS
Bookmark.create!(user_id: DemoUser.id, event_id: event2.id)
Bookmark.create!(user_id: DemoUser.id, event_id: event4.id)
Bookmark.create!(user_id: DemoUser.id, event_id: event7.id)
Bookmark.create!(user_id: DemoUser.id, event_id: event11.id)
Bookmark.create!(user_id: DemoUser.id, event_id: event20.id)
Bookmark.create!(user_id: DemoUser.id, event_id: event13.id)
Ticket.create!(user_id: DemoUser.id, event_id: event2.id)
Ticket.create!(user_id: DemoUser.id, event_id: event3.id)
Ticket.create!(user_id: DemoUser.id, event_id: event10.id)
