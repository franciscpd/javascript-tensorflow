import { lazy } from 'react';

const Home = lazy(() => import('@view/Home'));
const Dimensionality = lazy(() =>
  import('@view/TensorConstruct/Dimensionality')
);

export default [
  {
    path: '/',
    exact: true,
    component: Home,
    icon: 'home',
    label: 'Home',
  },
  {
    icon: '',
    label: 'Construção do tensor',
    path: '/tensor-construct',
    children: [
      {
        path: '/dimensionality',
        exact: true,
        component: Dimensionality,
        label: 'Dimensionalidade',
      },
    ],
  },
];
