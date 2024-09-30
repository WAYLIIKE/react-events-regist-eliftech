import css from './ParticipantsListItem.module.css';

export const ParticipantsListItem = ({ participant }) => {
  return (
    <li className={css.item}>
      <div className={css.logoWrapper}>
        <div className={css.logo}>
          <p className={css.logoWord}>{participant.name[0]}</p>
        </div>
        <div className={css.infoWrapper}>
          <p className={css.name}>{participant.name}</p>
          <p className={css.email}>{participant.email}</p>
        </div>
      </div>
    </li>
  );
};
