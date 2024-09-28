import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Container } from '../../components/Container/Container';
import { IoReturnUpBackOutline } from 'react-icons/io5';

import css from './Register.module.css';
import { NavLink } from 'react-router-dom';
import { addParticipant } from '../../redux/event/eventOps';

const schema = yup
  .object({
    name: yup.string().required('Full name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    birthDate: yup.date().required('Date of birth is required'),
    referal: yup.string().required('Please choose an option'),
  })
  .required();

export const Register = ({ eventId }) => {
  const dispatch = useDispatch();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const reqData = { ...data, event: eventId };
    console.log(reqData);
    dispatch(addParticipant(reqData));
    reset();
  };

  return (
    <div className={css.container}>
      <Container>
        <NavLink className={css.backLink} to="/events">
          <IoReturnUpBackOutline />
          <p>back to all events</p>
        </NavLink>
        <h1 className={css.header}>Event registration</h1>
        <p className={css.text}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={css.formGroup}>
            <input
              {...register('name')}
              placeholder="Full name"
              className={css.input}
            />
            <p className={css.error}>{errors.name?.message}</p>
          </div>

          <div className={css.formGroup}>
            <input
              {...register('email')}
              placeholder="Email"
              className={css.input}
            />
            <p className={css.error}>{errors.email?.message}</p>
          </div>

          <div className={css.formGroup}>
            <input
              type="date"
              {...register('birthDate')}
              placeholder="Date of birth"
              className={css.input}
            />
            <p className={css.error}>{errors.birthDate?.message}</p>
          </div>

          <div className={css.formGroup}>
            <label className={css.label}>
              Where did you hear about this event?
            </label>
            <div className={css.radioGroup}>
              <div>
                <input
                  type="radio"
                  value="social"
                  {...register('referal')}
                  className={css.radioInput}
                />{' '}
                Social media
              </div>
              <div>
                <input
                  type="radio"
                  value="friend"
                  {...register('referal')}
                  className={css.radioInput}
                />{' '}
                Friends
              </div>
              <div>
                <input
                  type="radio"
                  value="another"
                  {...register('referal')}
                  className={css.radioInput}
                />{' '}
                Found myself
              </div>
            </div>
            <p className={css.error}>{errors.referal?.message}</p>
          </div>

          <button type="submit" className={css.submit}>
            Join the event
          </button>
        </form>
      </Container>
    </div>
  );
};
