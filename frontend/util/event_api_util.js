export const getEvent = (id) => {
  const eventId = parseInt(id);
  return $.ajax({
    method: "GET",
    url: `/api/events/${eventId}`
  });
};

export const getEvents = (offset) => {
  offset = offset || 0;
  return $.ajax({
    method: "GET",
    url: '/api/events',
    data: {offset}
  });
};

export const createEvent = (event) => {
  return $.ajax({
    method: "POST",
    url: '/api/events',
    data: { event }
  });
};

export const updateEvent = (event) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/events/${event.id}`,
    data: { event }
  });
};

export const deleteEvent = (id) => {
  const eventId = parseInt(id);
  return $.ajax({
    method: "DELETE",
    url: `/api/events/${eventId}`
  });
};

export const getFilteredEvents = (filters) => {
  return $.ajax({
    method: "GET",
    url: "/api/events-filtered",
    data: filters
  });
};

export const getBookmarkedEvents = () => {
  return $.ajax({
    method: 'get',
    url: '/api/events-bookmarked',
  });
};

export const getHostedEvents = () => {
  return $.ajax({
    method: 'get',
    url: '/api/events-hosted',
  });
};

export const getPurchasedEvents = () => {
  return $.ajax({
    method: 'get',
    url: '/api/events-purchased',
  });
};

export const searchEvents = (search_string) => {
  return $.ajax({
    method: 'get',
    url:'/api/events-search',
    data: {search_string}
  });
};
