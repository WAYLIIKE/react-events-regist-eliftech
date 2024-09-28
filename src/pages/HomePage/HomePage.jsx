import { NavLink } from 'react-router-dom';

import css from './HomePage.module.css';

const HomePage = () => {
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
