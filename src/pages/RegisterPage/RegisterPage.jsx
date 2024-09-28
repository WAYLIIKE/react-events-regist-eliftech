import { useParams } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import { Register } from '../../components/Register/Register';

import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const { eventId } = useParams();

  return (
    <div className={css.container}>
      <Container>
        <Register eventId={eventId} />
      </Container>
    </div>
  );
};

export default RegisterPage;
