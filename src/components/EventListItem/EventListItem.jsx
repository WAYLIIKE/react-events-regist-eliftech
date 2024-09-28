import { IoLocationOutline } from 'react-icons/io5';

import css from './EventListItem.module.css';
import { NavLink } from 'react-router-dom';

export const EventListItem = ({ event }) => {
  return (
    <li className={css.item}>
      <div className={css.wrapper}>
        <h2 className={css.title}>{event.name}</h2>
        <div className={css.locWrapper}>
          <IoLocationOutline size={22} color="whitesmoke" />
          <p className={css.location}>{event.location}</p>
        </div>
      </div>
      <p className={css.description}>{event.description}</p>
      <NavLink className={css.link} to={`/events/${event._id}/register`}>
        Register
      </NavLink>
      <NavLink className={css.link} to={`/events/${event._id}`}>
        View
      </NavLink>
    </li>
  );
};
