import { values } from 'lodash';

export const allEvents = (state) => {
  return values(state.events);
};
