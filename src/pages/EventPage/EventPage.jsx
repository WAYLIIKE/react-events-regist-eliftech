import { useParams } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import { Event } from '../../components/Event/Event';
import { useSelector } from 'react-redux';
import { selectLoading } from '../../redux/selectors';

// import css from './EventPage.module.css';

const EventPage = () => {
  const { eventId } = useParams();
  const isLoading = useSelector(selectLoading);

  return (
    <div>
      <Container>
        <Event eventId={eventId} />
      </Container>
    </div>
  );
};

export default EventPage;
