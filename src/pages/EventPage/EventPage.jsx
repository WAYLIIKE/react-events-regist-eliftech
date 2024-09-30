import { useParams } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import { Event } from '../../components/Event/Event';
import { useDispatch } from 'react-redux';
import { setParticipants } from '../../redux/event/eventSlice';
import { useEffect } from 'react';

// import css from './EventPage.module.css';

const EventPage = () => {
  const { eventId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setParticipants());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <Event eventId={eventId} />
      </Container>
    </div>
  );
};

export default EventPage;
