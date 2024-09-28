import { EventListItem } from '../EventListItem/EventListItem';
import css from './EventsList.module.css';

export const EventList = ({ events }) => {
  return (
    <div className={css.container}>
      <div className={css.scrollWrapper}>
        <h1 className={css.title}>All upcoming events</h1>
        <ul className={css.list}>
          {events.map((event, idx) => (
            <EventListItem key={idx} event={event} />
          ))}
        </ul>
      </div>
    </div>
  );
};
