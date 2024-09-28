import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../redux/event/eventOps';

import css from './EventsPage.module.css';
import { EventList } from '../../components/EventsList/EventsList';
import { selectEvents } from '../../redux/selectors';
import { Container } from '../../components/Container/Container';

const EventsPage = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <Container>
        <EventList events={events} />
      </Container>
    </div>
  );
};

export default EventsPage;
