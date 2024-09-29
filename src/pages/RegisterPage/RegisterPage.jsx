import { useParams } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import { Register } from '../../components/Register/Register';

import css from './RegisterPage.module.css';
import { useEffect, useState } from 'react';
import { fetchEventInfo } from '../../redux/event/eventOps';
import { useDispatch } from 'react-redux';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { eventId } = useParams();
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
      <Container>
        <Register eventId={eventId} event={event} />
      </Container>
    </div>
  );
};

export default RegisterPage;
