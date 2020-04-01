import { lazy } from 'react';

const Home = lazy(() => import('@view/Home'));
const Dimensionality = lazy(() =>
  import('@view/TensorConstruct/Dimensionality')
);
const Typing = lazy(() => import('@view/TensorConstruct/Typing'));
const Default = lazy(() => import('@view/TensorConstruct/Default'));

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
      {
        path: '/typing',
        exact: true,
        component: Typing,
        label: 'Tipagem',
      },
      {
        path: '/default',
        exact: true,
        component: Default,
        label: 'Tensor Padrão',
      },
    ],
  },
];
