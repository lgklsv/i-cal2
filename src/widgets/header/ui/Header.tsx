import { IoMdAdd } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { createEvent } from 'store/reducers/EventsSlice';
import { AppButton, AppLogo } from 'shared/ui';
import { useCalEvent } from 'shared/hooks/use-cal-event';
import { isCorrectISODate } from 'shared/lib/date';
import { HeaderContainer } from './Header.styles';

function Header() {
  const dispatch = useDispatch();
  const { existsEvent } = useCalEvent();

  const createEventHandler = () => {
    let date;
    let repeat = true;
    while (repeat && (!isCorrectISODate(date) || existsEvent(date))) {
      date = prompt('Enter event time: YYYY-MM-DD HH');
      if (date === null) break;
      if (!isCorrectISODate(date)) {
        repeat = confirm('Invalid date format. Try again?');
      } else if (existsEvent(date)) {
        repeat = confirm(
          'You cannot set multiple events on the same time. Remove existing event first or choose different time slot. Try again?'
        );
      }
    }
    if (!repeat || !date) return;

    let text;
    repeat = true;
    while (repeat && !text) {
      text = prompt('Enter task text:');
      if (text || text === null) break;
      repeat = confirm('Event text can not be empty. Try again?');
    }

    if (!repeat || !text) return;

    dispatch(
      createEvent({
        id: uuidv4(),
        text,
        date,
      })
    );
  };

  return (
    <HeaderContainer>
      <AppLogo />
      <AppButton onClick={createEventHandler} icon={<IoMdAdd />} />
    </HeaderContainer>
  );
}

export default Header;
