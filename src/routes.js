import { lazy } from 'react';

export const routes = [
  {
    path: '/',
    label: 'AuthPage',
    exact: true,
    component: lazy(() => import('./pages/Authorization/index')),
    private: false,
    restricted: false,
  },

  {
    path: '/profile',
    label: 'ProfilePage',
    exact: false,
    component: lazy(() => import('./pages/Profile/index')),
    private: true,
    restricted: false,
  },

  {
    path: '/home',
    label: 'HomePage',
    exact: false,
    component: lazy(() => import('./pages/Home/index')),
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
