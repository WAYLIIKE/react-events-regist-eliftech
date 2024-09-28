import css from './HomePage.module.css';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchEvents } from '../../redux/event/eventOps';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <div className={css.mainBlock}>
        <p className={css.title}>Worldwide event platform</p>
        <NavLink className={css.link} to="/events">
          Get started
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
