import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(()=>import ('./components/pages/Home'));
const Services = lazy(()=>import ('./components/pages/Services'));
const Products = lazy(()=>import ('./components/pages/Products'));
const SignUp = lazy(()=>import ('./components/pages/SignUp'));
const OMDbAPI = lazy(()=>import ('./components/pages/OMDbAPI'));

function App() {

  return (
    <>
      <Router>
      <Suspense fallback={<h2>Loading...</h2>}>
       <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path='/services' component={Services}/>
          <Route path='/products' component={Products}/>
          <Route path='/OMDbAPI' component={OMDbAPI}/>
          <Route path='/sign-up' component={SignUp}/>
        </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
 