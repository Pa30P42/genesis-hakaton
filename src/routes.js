import { lazy } from 'react';

export const routes = [
  {
    path: '/home',
    label: 'HomePage',
    exact: false,
    component: lazy(() => import('./pages/Home/index')),
    private: false,
    restricted: false,
  },

  {
    path: '/signin',
    label: 'AuthPage',
    exact: true,
    component: lazy(() => import('./pages/Authorization/index')),
    private: false,
    restricted: false,
  },

  {
    path: '/signup',
    label: 'AuthPage',
    exact: true,
    component: lazy(() => import('./pages/Authorization/index')),
    private: false,
    restricted: false,
  },

  {
    path: '/movie',
    label: 'MoviePage',
    exact: true,
    component: lazy(() => import('./pages/Movie/index')),
    private: false,
    restricted: false,
  },

  {
    path: '/notfound',
    label: 'NotFound',
    exact: true,
    component: lazy(() => import('./pages/404/index')),
    private: false,
    restricted: false,
  },
];

export const homeRoute = routes.find(route => route.label === 'HomePage');
// export const dynamicsRoute = routes.find(
//   route => route.label === 'DynamicsPage',
// );
