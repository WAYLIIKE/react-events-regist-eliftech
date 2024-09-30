import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchEventInfo, getParticipants } from '../../redux/event/eventOps';
import { IoLocationOutline } from 'react-icons/io5';
import { IoReturnUpBackOutline } from 'react-icons/io5';

import css from './Event.module.css';
import { NavLink } from 'react-router-dom';
import { ParticipantsListItem } from '../ParticipantsListItem/ParticipantsListItem';
import { changeFilter } from '../../redux/event/eventSlice';
import { selectFilteredParticipants } from '../../redux/selectors';

export const Event = ({ eventId }) => {
  const dispatch = useDispatch();
  const [event, setEvent] = useState({});
  const participants = useSelector(selectFilteredParticipants);

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

  console.log(participants);

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
      <div className={css.scrollWrapper}>
        <h2 className={css.subTitle}>{`${event.name} participants`}</h2>
        <input
          type="text"
          placeholder="Find your colleague"
          className={css.input}
          onChange={(evt) => dispatch(changeFilter(evt.target.value))}
        />
        <ul className={css.list}>
          {participants.map((participant, idx) => (
            <ParticipantsListItem key={idx} participant={participant} />
          ))}
        </ul>
      </div>
    </div>
  );
};
