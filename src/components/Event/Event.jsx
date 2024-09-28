import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchEventInfo } from '../../redux/event/eventOps';
import { IoLocationOutline } from 'react-icons/io5';
import { IoReturnUpBackOutline } from 'react-icons/io5';

import css from './Event.module.css';
import { NavLink } from 'react-router-dom';

export const Event = ({ eventId }) => {
  const dispatch = useDispatch();
  const [event, setEvent] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await dispatch(fetchEventInfo(eventId));

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
      <h1 className={css.title}>{event.name}</h1>
      <div className={css.locWrapper}>
        <IoLocationOutline size={22} color="whitesmoke" />
        <p className={css.location}>{event.location}</p>
      </div>
      <p className={css.text}>{event.description}</p>
    </div>
  );
};
