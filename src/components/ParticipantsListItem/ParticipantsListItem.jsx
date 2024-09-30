import css from './ParticipantsListItem.module.css';

export const ParticipantsListItem = ({ participant }) => {
  return (
    <li className={css.item}>
      <div className={css.logoWrapper}>
        <div className={css.logo}>
          <p className={css.logoWord}>{participant.name[0]}</p>
        </div>
        <p>{participant.name}</p>
      </div>
    </li>
  );
};
