export const createBookmark = (event_id) => {
  return $.ajax({
    method: 'POST',
    url: '/api/bookmarks',
    data: { event_id }
  });
};

export const deleteBookmark = (event_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/bookmarks/${event_id}`
  });
};
