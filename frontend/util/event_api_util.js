export const getEvent = (id) => {
  const eventId = parseInt(id);
  return $.ajax({
    method: "GET",
    url: `/api/events/${eventId}`
  });
};

export const getEvents = () => {
  return $.ajax({
    method: "GET",
    url: '/api/events'
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
