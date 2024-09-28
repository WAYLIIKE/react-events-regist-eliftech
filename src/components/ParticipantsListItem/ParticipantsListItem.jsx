import css from './ParticipantsListItem.module.css';

export const ParticipantsListItem = ({ participant }) => {
  return (
    <li className={css.item}>
      <p>{participant.name}</p>
    </li>
  );
};
