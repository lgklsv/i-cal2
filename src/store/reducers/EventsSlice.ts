import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Event = {
  id: string;
  text: string;
  date: string;
};

export type EventsState = {
  events: Event[];
  selectedEvent: Event | null;
};

const initialState: EventsState = {
  events: [{ id: '1', text: 'first event', date: '2023-06-04T13:00' }],
  selectedEvent: null,
};

const EventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    createEvent(state, action: PayloadAction<Event>) {
      state.events.push(action.payload);
    },
    selectEvent(state, action: PayloadAction<Event>) {
      state.selectedEvent = action.payload;
    },
    deleteEvent(state, action: PayloadAction<Event>) {
      state.events.filter((event) => event.id !== action.payload.id);
    },
  },
});

const { actions, reducer } = EventsSlice;

export const { createEvent, selectEvent, deleteEvent } = actions;

export default reducer;
