import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const EventsPage = lazy(() => import('./pages/EventsPage/EventsPage'));
const EventPage = lazy(() => import('./pages/EventPage/EventPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));

export const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:eventId" element={<EventPage />} />
          <Route path="/events/:eventId/register" element={<RegisterPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};
