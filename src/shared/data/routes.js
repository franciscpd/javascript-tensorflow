import { lazy } from 'react';

const Home = lazy(() => import('@view/Home'));

export default [
  {
    path: '/',
    exact: true,
    component: Home,
    icon: 'home',
    label: 'Home',
  },
];
