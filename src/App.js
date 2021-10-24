import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import './stylesheet/main.scss';
import PrivateRoute from './components/CustomRoutes/PrivateRoute';
import PublicRoute from './components/CustomRoutes/PublicRoute';
import NotFound from './pages/404/index';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesThunk } from './redux/slices/movies/thunks';
import { getIsMoviesList } from './redux/slices/movies/selectors';
import Navigation from './components/Navigation';

function App() {
  const dispatch = useDispatch();

  const isListAvailable = useSelector(getIsMoviesList);

  useEffect(() => {
    if (!isListAvailable) dispatch(fetchMoviesThunk());
  }, []);
  return (
    <BrowserRouter className="App">
      <Suspense fallback="...Loading">
        <header>
          <Navigation />
        </header>
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
    </BrowserRouter>
  );
}

export default App;
