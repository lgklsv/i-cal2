import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Event = {
  id: string;
  text: string;
  date: string;
};

export type EventsState = {
  events: Event[];
};

const initialState: EventsState = {
  events: [{ id: '1', text: 'first event', date: '2023-06-04T13:00' }],
};

const EventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    createEvent(state, action: PayloadAction<Event>) {
      state.events.push(action.payload);
    },
  },
});

const { actions, reducer } = EventsSlice;

export const { createEvent } = actions;

export default reducer;
