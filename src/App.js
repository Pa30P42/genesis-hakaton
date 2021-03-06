import React, { Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import './stylesheet/main.scss';
import PrivateRoute from './components/CustomRoutes/PrivateRoute';
import PublicRoute from './components/CustomRoutes/PublicRoute';
import NotFound from './pages/404/index';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesThunk } from './redux/slices/movies/thunks';
import { getIsMoviesList } from './redux/slices/movies/selectors';
import Navigation from './components/Navigation';
import Spinner from './components/Spinner';

function App() {
  const dispatch = useDispatch();

  const isListAvailable = useSelector(getIsMoviesList);

  useEffect(() => {
    if (!isListAvailable) dispatch(fetchMoviesThunk());
  }, []);

  return (
    <>
      <header>
        <Navigation />
      </header>
      <Suspense fallback={<Spinner />}>
        <Switch>
          {routes.map(route =>
            route.private ? (
              <PrivateRoute key={route.label} {...route} />
            ) : (
              <PublicRoute key={route.label} {...route} />
            ),
          )}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
