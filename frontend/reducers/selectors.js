import { values } from 'lodash';

export const allEvents = (state) => {
  return values(state.events);
};

export const allCategories = (state) => {
  return values(state.categories);
};
