import { useParams } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import { Event } from '../../components/Event/Event';

// import css from './EventPage.module.css';

const EventPage = () => {
  const { eventId } = useParams();

  return (
    <div>
      <Container>
        <Event eventId={eventId} />
      </Container>
    </div>
  );
};

export default EventPage;
