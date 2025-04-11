import React, { Suspense, lazy } from 'react';
import { createHashRouter } from 'react-router-dom';
import Loader from './components/common/Loader';
import "./index.css";
// Helper function to simulate loading delay
function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

// Lazy load components
const Layout = lazy(() => import('./Layout')); // Updated path
const Dashboard = lazy(() => wait(800).then(() => import('./pages/Dashboard')));
const Login = lazy(() => wait(600).then(() => import('./pages/Login')));
const Profile = lazy(() => wait(700).then(() => import('./pages/Profile')));
const NotFound = lazy(() => import('./pages/NotFound'));

const router = createHashRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Dashboard />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<Loader />}>
        <NotFound />
      </Suspense>
    ),
  },
]);

export default router;