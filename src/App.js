import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import './App.css';
import PrivateRoute from './components/CustomRoutes/PrivateRoute';
import PublicRoute from './components/CustomRoutes/PublicRoute';
import NotFound from './pages/404/index';
import { getMovies } from './API/movies';

function App() {
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <BrowserRouter className="App">
      <Suspense fallback="...Loading">
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
