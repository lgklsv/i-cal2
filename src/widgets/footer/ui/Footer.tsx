import { useDispatch, useSelector } from 'react-redux';

import { setToday } from 'store/reducers/CalendarSlice';
import { AppButton } from 'shared/ui';
import { EventsSelector } from 'store/selectors/EventSelector';
import { CalEvent, deleteEvent } from 'store/reducers/EventsSlice';
import { FooterContainer } from './Footer.styles';

function Footer() {
  const dispatch = useDispatch();
  const { selectedEvent } = useSelector(EventsSelector);

  const deleteEventHandler = (event: CalEvent) => {
    const isConfirmed = confirm(
      'Do you really want to delete this task? This action cannot be undone.'
    );
    if (isConfirmed) dispatch(deleteEvent(event));
  };

  const setTodayHandler = () => {
    dispatch(setToday());
  };

  return (
    <FooterContainer>
      <AppButton onClick={setTodayHandler}>Today</AppButton>
      {selectedEvent && (
        <AppButton onClick={() => deleteEventHandler(selectedEvent)}>
          Delete
        </AppButton>
      )}
    </FooterContainer>
  );
}

export default Footer;
