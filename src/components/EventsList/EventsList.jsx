import { useDispatch, useSelector } from 'react-redux';
import { EventListItem } from '../EventListItem/EventListItem';
import { selectEvents, selectLoading } from '../../redux/selectors';
import { Skeleton } from '@mui/material';

import css from './EventsList.module.css';
import { useEffect } from 'react';
import { fetchEvents } from '../../redux/event/eventOps';

export const EventList = () => {
  const isLoading = useSelector(selectLoading);

  const dispatch = useDispatch();
  const events = useSelector(selectEvents);

  useEffect(() => {
    dispatch(fetchEvents({ page: 1, limit: 10 }));
  }, [dispatch]);

  return (
    <div className={css.container}>
      <div className={css.scrollWrapper}>
        <h1 className={css.title}>All upcoming events</h1>
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <Skeleton
              key={index}
              variant="rounded"
              width={'calc(100% - 28px)'}
              height={136}
              sx={{
                borderRadius: '20px',
                margin: '10px',
                marginTop: '30px',
                marginBottom: '35px',
              }}
            />
          ))
        ) : (
          <ul className={css.list}>
            {events.map((event, idx) => (
              <EventListItem key={idx} event={event} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
