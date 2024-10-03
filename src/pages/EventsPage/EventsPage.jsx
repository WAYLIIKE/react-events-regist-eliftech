import { EventList } from '../../components/EventsList/EventsList';
import { Container } from '../../components/Container/Container';

import css from './EventsPage.module.css';

const EventsPage = () => {
  return (
    <div className={css.container}>
      <Container>
        <EventList />
      </Container>
    </div>
  );
};

export default EventsPage;
