import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchEventInfo, getParticipants } from '../../redux/event/eventOps';
import { IoLocationOutline } from 'react-icons/io5';
import { IoReturnUpBackOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { ParticipantsListItem } from '../ParticipantsListItem/ParticipantsListItem';
import { changeFilter } from '../../redux/event/eventSlice';
import {
  selectFilter,
  selectFilteredParticipants,
  selectLoading,
} from '../../redux/selectors';
import { Skeleton } from '@mui/material';

import css from './Event.module.css';

export const Event = ({ eventId }) => {
  const dispatch = useDispatch();
  const [event, setEvent] = useState({});
  const participants = useSelector(selectFilteredParticipants);
  const isFilter = useSelector(selectFilter);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await dispatch(fetchEventInfo(eventId));
        await dispatch(getParticipants(eventId));

        setEvent(res.payload);
      } catch (error) {
        console.error('Error fetching event info:', error);
      }
    };

    fetchData();
  }, [dispatch, eventId, setEvent]);

  return (
    <div className={css.container}>
      <NavLink className={css.backLink} to="/events">
        <IoReturnUpBackOutline />
        <p>back to all events</p>
      </NavLink>
      {isLoading ? (
        <Skeleton
          variant="rounded"
          width={700}
          height={98}
          sx={{ marginBottom: '30px' }}
        />
      ) : (
        <div className={css.mainWrapper}>
          <h1 className={css.title}>{event.name}</h1>
          <div className={css.locWrapper}>
            <IoLocationOutline size={22} color="whitesmoke" />
            <p className={css.location}>{event.location}</p>
          </div>
          <p className={css.text}>{event.description}</p>
        </div>
      )}
      <div className={css.scrollWrapper}>
        {isLoading ? (
          <Skeleton
            variant="rounded"
            width={670}
            height={25}
            sx={{ marginBottom: '20px' }}
          />
        ) : (
          <h2 className={css.subTitle}>{`${event.name} participants`}</h2>
        )}
        {isLoading ? (
          <Skeleton
            variant="rounded"
            width={670}
            height={37.67}
            sx={{ marginBottom: '20px' }}
          />
        ) : isFilter === '' && participants.length === 0 ? null : (
          <input
            type="text"
            placeholder="Find your colleague"
            className={css.input}
            onChange={(evt) => dispatch(changeFilter(evt.target.value))}
          />
        )}
        {isLoading ? (
          <Skeleton variant="rounded" width={1316} height={450} />
        ) : participants.length === 0 ? (
          isFilter ? (
            <div className={css.empty}>
              <p className={css.emptyContent}>
                There are no participants with this query
              </p>
            </div>
          ) : (
            <div className={css.empty}>
              <p className={css.emptyContent}>
                There are no participants registred yet
              </p>
              <p className={css.emptyText}>be the first participant</p>
              <NavLink
                className={css.link}
                to={`/events/${event._id}/register`}
              >
                register
              </NavLink>
            </div>
          )
        ) : (
          <ul className={css.list}>
            {participants.map((participant, idx) => (
              <ParticipantsListItem key={idx} participant={participant} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
