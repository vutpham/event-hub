# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

vu = User.create(username: "supsupvu", password: "password")
leo = User.create(username: "leo", password: "password")
DemoUser = User.create(username: "Stranger", password: "password")
user1 = User.create(username: "Sports Basement", password: "password")
user2 = User.create(username: "Musical Molly", password: "password")
user3 = User.create(username: "Arts-n-Crafts", password: "password")
user4 = User.create(username: "Professional Events", password: "password")
user5 = User.create(username: "Parties4U", password: "password")
user6 = User.create(username: "LevelUpNow", password: "password")
user7 = User.create(username: "Food4All", password: "password")

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

event1 = Event.create!(title: "Cal Academy of Sciences NightLife",
                      full_description: "Enjoy music, creatures, and cocktails as you set out with friends on a journey to the stars and the depths of the sea.A variety of food options are available at NightLife from 6-9:30 pm, including the Academy Café, The Terrace (located in the West Garden), and convenient food cart in the front lobby.",
                      image_url: "https://res.cloudinary.com/db08acmvn/image/upload/v1495485317/mezcal-nightlife-celebration-of-cinco-de-mayo-mex-i-am-sf-4_ziu0nu.jpg",
                      date: "2017/11/16",
                      price: 15,
                      venue: "California Academy of Sciences",
                      street_address: "55 Music Concourse Dr",
                      city_state_zip: "San Francisco, CA 94118",
                      host_id: vu.id)
EventCategory.create!(event_id: event1.id, category_id: Arts.id)
EventCategory.create!(event_id: event1.id, category_id: Parties.id)

event2 = Event.create!(title: "Pokemon Go Getters",
                      full_description: "Just a meet up for people to gather and catch Pokemon.",
                      date: "2017/12/20",
                      image_url: "http://media.comicbook.com/2017/06/raid-battles-1005045.jpg",
                      venue: "Dolores Park",
                      street_address: "Dolores St & 19th St",
                      city_state_zip: "San Francisco, CA 94114",
                      host_id: vu.id)

EventCategory.create!(event_id: event2.id, category_id:Sports.id)

event3 = Event.create!(title: "Nor Cal Corgi Con - Fall 2018",
                      full_description: "We look FURward to seeing everypawdy at
                      Nor Cal Corgi Con – Fall Edition 2017. Event will take place on
                      Ocean Beach in San FranCorgsco. Between Stairwell 2 and 5. \n
                      **This is a NEW LOCATION, Same beach but closer towards Cliff House**",
                      image_url: "https://res.cloudinary.com/vutpham/image/upload/v1508872590/Screen_Shot_2017-10-24_at_12.15.25_PM_juiub6.png",
                      date: "2018/10/21/",
                      venue: "Ocean Beach",
                      street_address: "1400 Great Highway",
                      city_state_zip: "San Francisco, CA",
                      host_id: leo.id)

EventCategory.create!(event_id: event3.id, category_id:Parties.id)
EventCategory.create!(event_id: event3.id, category_id:Music.id)
EventCategory.create!(event_id: event3.id, category_id:Food.id)

event4 = Event.create!(title: "SNOWFEST",
                      full_description: "Get ready for our 12th Annual SNOWFEST at Sports Basement Presidio! Presented by Squaw | Alpine, join us as we celebrate
                      all things snow! Check out the latest gear and technology from our snow and apparel vendors, meet
                      with Tahoe mountain representatives, and stick around for amazing raffles every hour, on the hour!",
                      image_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F36071553%2F35339365970%2F1%2Foriginal.jpg?w=800&rect=0%2C0%2C1050%2C525&s=22fd7800b32fbb73cf3fdbf0df9175b2",
                      date: "2017/11/12",
                      venue: "Sports Basement Presidio",
                      street_address: "610 Old Mason St",
                      city_state_zip: "San Francisco, CA 94129",
                      host_id: user1.id)

EventCategory.create!(event_id: event4.id, category_id:Sports.id)
EventCategory.create!(event_id: event4.id, category_id:Parties.id)

event5 = Event.create!(title: "Sports Basement Yoga at Bryant St!",
                      full_description: "Kick start your week with 90 minutes of yoga here at Sports Basement!
                      We host weekly classes with different instructors, styles of yoga and levels of difficulty.
                      Don't worry though - all classes offer modified positions for beginners or those with injuries.
                       Join us with a friend or meet some along the way in our weekly offerings.
                       Get that bit of exercise and mediation at the beginning of your week.
                       It's all about common interests and yoga pant prints. \n
Bring your own yoga mat, towel and water.",
                      image_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F29276520%2F193234360861%2F1%2Foriginal.jpg?w=800&rect=0%2C107%2C1024%2C512&s=08ebf1db8bdbd299833a4b2d34600888",
                      date: "2017/12/1/",
                      price: 5.00,
                      venue: "Sports Basement Bryant Street",
                      street_address: "1590 Bryant St.",
                      city_state_zip: "San Francisco, CA 94103",
                      host_id: user1.id)

EventCategory.create!(event_id: event5.id, category_id:Sports.id)

event6 = Event.create!(title: "HackerHouse Foodies",
                      full_description: %Q(Meetup for foodies in the tech industry),
                      image_url: "http://www.georgeinstitute.org/sites/default/files/main-images/chinese-food.jpg",
                      date: "2018/7/10",
                      venue: "CohortX",
                      price: 12,
                      street_address: "1410 15th Street",
                      city_state_zip: "San Francisco, CA",
                      host_id: vu.id)

EventCategory.create!(event_id: event6.id, category_id:Food.id)
EventCategory.create!(event_id: event6.id, category_id:Classes.id)

event7 = Event.create!(title: "Silicon Valley Basketball",
                      full_description: "Warriors fanatics! Join us at Bar San Pancho for some sports talk. In conversation: acclaimed sports writer Erik Malinowski, the author of the new Betaball, and Jon Steinberg, editor-in-chief of San Francisco magazine (fresh off a cover story on none other than KD himself). Stay for the Warriors. v Clippers game at 7:30, plus some margs, tacos, hamburguesas and cervezas.",
                      image_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F36851225%2F199130051817%2F1%2Foriginal.jpg?w=800&rect=0%2C132%2C1586%2C793&s=a81d8dd23f122c65ae3497d2dc95b528",
                      date: "2017/10/30",
                      price: 10.00,
                      venue: "Bar San Pancho",
                      street_address: "3198 16th Street",
                      city_state_zip: "San Francisco, CA 94103",
                      host_id: user1.id)

EventCategory.create!(event_id: event7.id, category_id:Sports.id)
EventCategory.create!(event_id: event7.id, category_id:Parties.id)

event8 = Event.create!(title: "Haunted Mansion Halloween Party",
                      full_description: "We would like to cordially invite you to Chocolate and Art Show San Francisco, Thursday June 22th, and Friday June 23th. Indulge yourself in some of SF's finest up-and-coming artists, photographers and creators! There is something for every body including live body painting, vendors, live music, face-painting, and free chocolate!",
                      image_url: "https://blasts.infusionlounge.com/wp-content/uploads/2017/09/22145849/Oct28Sat.jpg",
                      date: "2017/10/28",
                      price: 25.00,
                      venue: "Infusion Lounge",
                      street_address: "124 Ellis St",
                      city_state_zip: "San Francisco, CA 94102",
                      host_id: user5.id)

EventCategory.create!(event_id: event8.id, category_id:Music.id)
EventCategory.create!(event_id: event8.id, category_id:Parties.id)


event9 = Event.create!(title: "SF Giants vs. LA Dodgers",
                      full_description: "The 2014 World Series Champions - the SF Giants
                      - are back in action at AT&T Park in 2018. Here you will find the San
                      Francisco Giants schedule that includes all regular season home games
                      this year.You will also learn more about where to find tickets, tips
                       to enjoy a game at AT&T Park, and a brief history of the Giants.",
                      date: "2018/04/06",
                      price: 80,
                      image_url: "https://res.cloudinary.com/db08acmvn/image/upload/v1495484983/ATT-Park-night_a9wxlp.jpg",
                      venue: "AT&T Park",
                      street_address: "24 Willie Mays Plaza",
                      city_state_zip: "San Francisco, CA 94107",
                      host_id: vu.id)

EventCategory.create!(event_id: event9.id, category_id: Sports.id)

event10 = Event.create!(title: "Next Level Temple",
                      full_description: "Halloween weekend is officially here, what better way than to kick it off with us. Dance the night away with sounds by Golden State Warriors official DJ D-SHARP!! Wear your favaorite Halloween costume and enter in a chance to win CASH PRIZES. Contest hosted by SHAN BERRIES",
                      image_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F22480220%2F174869583035%2F1%2Foriginal.jpg?w=800&rect=30%2C0%2C1988%2C994&s=6b9b284d939303f2aeb7a06e131cc6a1",
                      date: "2017/10/26",
                      price: 20,
                      venue: "Temple Nightclub",
                      street_address: "540 Howard Street",
                      city_state_zip: "San Francisco, CA 94105",
                      host_id: user5.id)

EventCategory.create!(event_id: event10.id, category_id: Music.id)
EventCategory.create!(event_id: event10.id, category_id: Parties.id)


event11 = Event.create!(title: "Poptopia!",
                      full_description: %Q(99.7 NOW!’s SOLD OUT POPTOPIA presented by The Bay Club \n
Saturday, December 2nd \n
SAP Center – San Jose \n

Taylor Swift \n
Ed Sheeran \n
The Chainsmokers\n
Fifth Harmony\n
Logic\n
Niall Horan\n
Khalid\n
Dua Lipa),
                      image_url: "https://cbs997now.files.wordpress.com/2017/10/poptopia-dl-v2.png?w=640&h=360&crop=1",
                      date: "2017/12/2",
                      venue: "SAP Center",
                      price: 80,
                      street_address: "525 W Santa Clara St",
                      city_state_zip: "San Jose, CA 95113",
                      host_id: user2.id)

EventCategory.create!(event_id: event11.id, category_id:Music.id)

event12 = Event.create!(title: "Late Registration",
                      full_description: %Q(FREE 2000’S RAP PARTY: LATE REGISTRATION RETURNS TO MEZZANINE OCTOBER 27th FOR A HALLOWEEN THEMED COSTUME PARTY FEATURING ALL THE NOSTALGIC CRUNK, HYPHY, SNAP MUSIC, AND SENSITIVE THUG JAMS OF THE 2000s SELECTED BY OUR RAP DJ SUPER TEAM. HALLOWEEN COSTUME SUGGESTED, WE WANNA SEE YOUR JARED LETO JOKER COSTUME DO THE POOL PALACE. RSVP NOW TO GUARANTEE ENTRY, THIS WILL SELL OUT.),
                      image_url: "https://res.cloudinary.com/vutpham/image/upload/v1508877193/late_registration_xhfdxs.png",
                      date: "2017/10/27",
                      venue: "Mezzanine",
                      price: 25,
                      street_address: "444 Jessie St",
                      city_state_zip: "San Francisco, CA 94103",
                      host_id: DemoUser.id)

EventCategory.create!(event_id: event12.id, category_id:Music.id)

event13 = Event.create!(title: "Paint Nite",
                      full_description: %Q(Paint Nite, the global company in the paint and sip industry, is headquartered in Somerville, Massachusetts. Founded in 2012, Paint Nite offers live, nightly painting events accompanied by wine or cocktails.),
                      image_url: "http://www.newportonthelevee.com/Portals/newportonthelevee/Images/Events/1_paint%20nite.jpg",
                      date: "2017/12/4",
                      price: 40,
                      venue: "Art House",
                      street_address: "3101 24th St",
                      city_state_zip: "San Francisco, CA 94110",
                      host_id: user3.id)

EventCategory.create!(event_id: event13.id, category_id:Arts.id)
EventCategory.create!(event_id: event13.id, category_id:Parties.id)
EventCategory.create!(event_id: event13.id, category_id:Classes.id)

event14 = Event.create!(title: "Mission: Comics & Art",
                      full_description: %Q(Extensive selection of mainstream & indie comics titles plus a gallery in a welcoming space.),
                      image_url: "http://www.theguideliverpool.com/wp-content/uploads/2016/08/Comic-Con-2016.jpg",
                      date: "2018/2/23",
                      venue: "The Last Comic",
                      street_address: "2250 Mission St",
                      city_state_zip: "San Francisco, CA 94110",
                      host_id: user3.id)

EventCategory.create!(event_id: event14.id, category_id:Arts.id)
EventCategory.create!(event_id: event14.id, category_id:Business.id)

event15 = Event.create!(title: "Ruby Hack Night",
                      full_description: %Q(The fine folks at Touch of Modern are bringing together a group of Ruby/Rails programmers who want a space to regularly come to and spend a few hours hacking with other Rubyists. Parameters: completely open! Bring any project you'd like to work on. Food and beverages will be provided, all you need to bring is your hardware!),
                      image_url: "http://www.timeoutdubai.com/thumb/md-9/content/63785/business_base.jpg",
                      date: "2018/2/10",
                      venue: "Touch of Modern",
                      street_address: "350 Rhode Island Street",
                      city_state_zip: "San Francisco, CA",
                      host_id: user6.id)

EventCategory.create!(event_id: event15.id, category_id:Business.id)
EventCategory.create!(event_id: event15.id, category_id:Classes.id)

event16 = Event.create!(title: "The Design Gurus Summit",
                      full_description: %Q(Come learn from top Silicon Valley designers, thinkers and thought leaders who will share their insights on topics including product design, user experience design, design for emerging platforms, branding, marketing, creativity, entrepreneurship, design-driven startups, creative inspiration, and more.
                      A full-day event of both keynotes and panels from 8:30 am to 5:00 pm. This year we have upgraded to the beautiful Kanbar Hall at the San Francisco Jewish Community Center. This is a world-class facility with a true stage and a professional audio visual team.),
                      image_url: "https://cdn.evbuc.com/eventlogos/130900195/dgslogo.png",
                      date: "2018/9/19",
                      venue: "JCCSF",
                      price: 185,
                      street_address: "3200 California Street",
                      city_state_zip: "San Francisco, CA 94118",
                      host_id: user4.id)

EventCategory.create!(event_id: event16.id, category_id:Business.id)
EventCategory.create!(event_id: event16.id, category_id:Classes.id)

event17 = Event.create!(title: "JavaScript Developer Bootcamp",
                      full_description: %Q(Learn Fundamental of JavaScript, jQuery, AngularJS and NodeJS.),
                      image_url: "https://udemy-images.udemy.com/course/480x270/607218_a05a_2.jpg",
                      date: "2018/6/08",
                      venue: "SF Javascript Building",
                      price: 95,
                      street_address: "3543 18th St",
                      city_state_zip: "San Francisco, CA 94110",
                      host_id: DemoUser.id)

EventCategory.create!(event_id: event17.id, category_id:Business.id)

event18 = Event.create!(title: "San Francisco Giants Sports Medicine",
                      full_description: "The San Francisco Giants Medical Team cordially invites you to participate in the Fourth Annual San Francisco Giants Sports Medicine Conference. We are excited to bring together some of the most elite healthcare professionals in the baseball sports medicine community, including World-Series winning athletic trainers, physical therapists, strength and conditioning coaches, and team physicians for a dynamic two-day program on and off the field. In addition, college, high school, professional and clinical healthcare providers, who specialize in treating baseball and softball injuries, will be in attendance. ",
                      image_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F30875474%2F176564263335%2F1%2Foriginal.jpg?w=800&rect=0%2C1%2C1064%2C532&s=883ea5b7c5d996f454077b16b6a9c15f",
                      date: "2018/1/12/",
                      price: 450.00,
                      venue: "Grand Hyatt, Union Square",
                      street_address: "345 Stockton Street",
                      city_state_zip: "San Francisco, CA 94108",
                      host_id: user1.id)

EventCategory.create!(event_id: event18.id, category_id:Sports.id)
EventCategory.create!(event_id: event18.id, category_id:Classes.id)
EventCategory.create!(event_id: event18.id, category_id:Business.id)

event19 = Event.create!(title: "San Francisco Career Fair & Job Fair",
                      full_description: %Q(The 18th Annual San Francisco Career Fair - Sales & Professional Job Fair
Wednesday - July 26,2017 **11:30 am-2:00pm in Burlingame
Meet, sit down and interview with Fortune 500 employers at The San Francisco Sales & Professional Career Fair. Professional Dress (suit & tie or business suit) Bring plenty of resumes.
Industries represented at our Career Fairs: Sales, Inside Sales, Outside Sales, Retail, Financial, B2B Sales, Customer Service, Healthcare, Industrial, Consulting, Customer Service, Security Sales, Pharmaceutical, Recruiting, Insurance, Retail, Telecommunications, Logistics, Solar, Marketing, Management, Medical Device and more ),
                      image_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F26155763%2F72054276821%2F1%2Foriginal.jpg?w=800&rect=23%2C0%2C1302%2C651&s=189277e2b92dd8902b81e95abe2addad",
                      date: "2018/7/26",
                      venue: "Embassy Suites By Hilton, SF ",
                      street_address: "150 Anza Blvd",
                      city_state_zip: "Burlingame, Ca 94104",
                      host_id: user4.id)

EventCategory.create!(event_id: event19.id, category_id:Business.id)

event20 = Event.create!(title: "Foodies Galore",
                      full_description: "From dining novices to epicurean gourmands, SF Foodies always have a great time enjoying delicious food. Join us to enjoy delicious meals with new friends!",
                      image_url: "http://www.ohnuts.com/blog/wp-content/uploads/2014/01/Valentines-day-mini-cakes-11.jpg",
                      date: "2018/7/15",
                      price: 5,
                      venue: "Fort Mason Center",
                      street_address: "2 Marina Blvd",
                      city_state_zip: "San Francisco, CA 94123",
                      host_id: user4.id)

EventCategory.create!(event_id: event20.id, category_id:Food.id)
EventCategory.create!(event_id: event20.id, category_id:Parties.id)

event21 = Event.create!(title: "LOVE + PROPAGANDA SATURDAY'S",
                      full_description: "Experience the all new Love + Propaganda San Francisco.
Situated in San Francisco's Union Square district, Love and Propaganda is a crossroads where music, fashion, and art all meet to form an audio-visual experience unlike anything you've ever seen before. After you've settled into the gorgeous neo-classic inspired design, sound becomes the focal point. Expect to have your understanding of nightlife challenged, as L+P prides itself on the attention put forth to recognize the much broader community of widely acclaimed international and underground producers, DJs, and overall talent that you won’t find anywhere else.",
                      image_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F23418943%2F174869583035%2F1%2Foriginal.jpg?w=800&rect=0%2C261%2C2048%2C1024&s=0612324debcb93b7b129c66406634470",
                      date: "2017/10/29",
                      venue: "Love And Propaganda",
                      price: 15,
                      street_address: "85 Campton Pl",
                      city_state_zip: "San Francisco, CA 94108",
                      host_id: user2.id)

EventCategory.create!(event_id: event21.id, category_id:Music.id)


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
