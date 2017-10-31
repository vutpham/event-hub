# Schema Information

## users

| column name     | data type | details                   |
| -----------     | --------- | ------------------------- |
| id              | integer   | not null, primary key     |
| username        | string    | not null, indexed, unique |
| password_digest | string    | not null                  |
| session_token   | string    | not null, indexed, unique |

## events

| column name     | data type | details                   |
| -----------     | --------- | ------------------------- |
| id              | integer   | not null, primary key     |
| title           | string    | not null, indexed         |
| full_description| string    | not null                  |
| image_url       | string    | not null, default provided|
| date            | date      | not null, indexed         |
| price           | float     | not null, indexed         |
| venue           | string    |                           |
| street_address  | string    |                           |
| city_state_zip  | string    |                           |
| host_id         | integer   | not null, foreign key (references users)   |

## tickets

| column name     | data type | details                   |
| -----------     | --------- | ------------------------- |
| id              | integer   | not null, primary key     |
| user_id         | integer   | not null, indexed, foreign key     |
| event_id        | integer   | not null, indexed, foreign_key |

## bookmarks

| column name     | data type | details                   |
| -----------     | --------- | ------------------------- |
| id              | integer   | not null, primary key     |
| user_id         | integer   | not null, indexed on event_id, foreign key     |
| event_id        | integer   | not null, indexed on user_id, foreign_key |

## categories

| column name     | data type | details                   |
| -----------     | --------- | ------------------------- |
| id              | integer   | not null, primary key     |
| name            | name      | not null                  |

## event categories

| column name     | data type | details                   |
| -----------     | --------- | ------------------------- |
| id              | integer   | not null, primary key     |
| event_id        | integer   | not null, foreign key     |
| category_id     | integer   | not null, foreign key     |
