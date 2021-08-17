// @flow
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Products = lazy(() => import('./pages/Products'));
const SignUp = lazy(() => import('./pages/SignUp'));
const OMDbAPI = lazy(() => import('./pages/OMDbAPI'));
const Refs = lazy(() => import('./pages/Refs'));
const Context = lazy(() => import('./pages/Context'))

function App() {

  return (
    <React.Fragment>
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<h2>Loading...</h2>}>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path='/services' component={Services} />
              <Route path='/products' component={Products} />
              <Route path='/OMDbAPI' component={OMDbAPI} />
              <Route path='/refs' component={Refs} />
              <Route path='/context' component={Context} />
              <Route path='/sign-up' component={SignUp} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Router>
      </React.Fragment>
      );
}

export default App;
