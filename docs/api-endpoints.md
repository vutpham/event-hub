# API Endpoint
## HTML API
### Root

* `GET /`
  - params: none
  - returns: React web app

## JSON API (nested under API namespace)
### Users

* `POST api/users`
  - params: username and password nested under user key
  - return: current user if successful signup

### Session

* `POST api/session`
  - params: username and password nested under user key
  - return: current user if successful signup

* `DELETE api/session`
  - params: none
  - return: current user if successful logout

### Events

* `POST /api/events`
  - params: required event params
  - return: created event if successful

* `GET /api/events`
  - params: none
  - return: all events

* `GET /api/events/:id`
  - params: event id
  - return: event with specified id

* `DELETE /api/events/:id`
  - params: event id
  - return: deleted event if successful

* `PATCH /api/events/:id`
  - params: event id
  - return: patched event

### Categories

* `GET /api/categories`
  - params: none
  - return: all event categories

### Tickets

* `POST /api/tickets`
  - params: event id
  - return: created ticket if successful

### Bookmarks

* `POST /api/bookmarks`
  - params: event id
  - return: bookmarked event with specified id

* `DELETE /api//bookmarks/:id`
  - params: event id
  - return: unbookmarked event with specified id
