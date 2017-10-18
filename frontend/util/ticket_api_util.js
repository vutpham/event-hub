export const createTicket = (event_id) => {
  return $.ajax({
    method: 'post',
    url: 'api/tickets',
    data: { event_id }
  });
};
