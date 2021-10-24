import { lazy } from 'react';

export const routes = [
  {
    path: '/',
    label: 'HomePage',
    exact: true,
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
    path: '/signin',
    label: 'SignIn',
    exact: true,
    // component: lazy(() => import('./pages/Movie/index')),
    // private: false,
    // restricted: false,
  },
  {
    path: '/signup',
    label: 'SignUp',
    exact: true,
    // component: lazy(() => import('./pages/Movie/index')),
    // private: false,
    // restricted: false,
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
export const movieRoute = routes.find(route => route.label === 'MoviePage');
export const signInRoute = routes.find(route => route.label === 'SignIn');
export const signUpRoute = routes.find(route => route.label === 'SignUp');
// export const dynamicsRoute = routes.find(
//   route => route.label === 'DynamicsPage',
// );
