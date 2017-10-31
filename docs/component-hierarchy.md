## Component Hierarchy

**AuthFormContainer**
- AuthForm

**HomeContainer**
- Home
  + NavBarContainer
   - NavBar
  + HomeSlideShow
  + EventSliderContainer
   - EventSliderItem
  + SearchBarContainer
   - SearchBar
  + CategorySearchContainer
   - CategorySearch
- Footer

**BrowseEventsContainer**
- BrowseEvents
 + BrowseEventsItem
- GoogleMap
- FilterContainer
 + FilterBox
  - FilterBoxItem

**EventDetailContainer**
- EventInformation
- EventDetails
- SingleEventGoogleMap

**UserEventsContainer**
- BookmarkedEvents
 + BrowseEventsItem
- MyTickets
 + BrowseEventsItem
- HostedEvents
 + BrowseEventsItem

**CheckOutContainer**
- CheckOutForm

## Routes

| Path | Component |
| ---  | --------- |
| "/sign-up" | AuthFormContainer |
| "/sign-in" | AuthFormContainer |
| "/home"    | HomeContainer     |
| "/events/:eventId" | EventShowContainer |
| "/new-event" | EventFormContainer |
| "/browse-events/:category" | BrowseEventsContainer |
| "/browse-events/:category/:searchString?" | BrowseEventsContainer |
| "/user-events" | UserEventsContainer |
