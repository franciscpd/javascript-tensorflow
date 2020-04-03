import { lazy } from 'react';

const Home = lazy(() => import('@view/Home'));
// TensorConstruct
const Dimensionality = lazy(() =>
  import('@view/TensorConstruct/Dimensionality')
);
const Typing = lazy(() => import('@view/TensorConstruct/Typing'));
const Default = lazy(() => import('@view/TensorConstruct/Default'));

// FunctionsConstruct
const Fill = lazy(() => import('@view/FunctionsConstruct/Fill'));

export default [
  {
    path: '/',
    exact: true,
    component: Home,
    icon: 'home',
    label: 'Home',
  },
  {
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
  {
    label: 'Funções de criação',
    path: '/functions-construct',
    children: [
      {
        path: '/fill',
        exact: true,
        component: Fill,
        label: 'Fill',
      },
    ],
  },
];
