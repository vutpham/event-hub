export const getAllCategories = () => {
  return $.ajax ({
    method: "GET",
    url: '/api/categories'
  });
};
