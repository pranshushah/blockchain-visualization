import React, { lazy, Suspense } from 'react';
import NavBar from './component/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import Spinner from './component/Spinner/Spinner';

const LazyHash = lazy(() => import('./component/blockComponent/Hash/Hash'));
const LazyBlock = lazy(() => import('./component/blockComponent/Block/Block'));
const LazyBlockChain = lazy(() =>
  import(
    './component/blockComponent/BlockChain/BlockChainContainer/BlockChainContainer'
  ),
);
const LazyDistributedBlockChain = lazy(() =>
  import(
    './component/blockComponent/DistributedBlockChain/DistributedBlockChain'
  ),
);

function App() {
  return (
    <Router>
      <NavBar />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path='/hash'>
            <LazyHash />
          </Route>
          <Route exact path='/block'>
            <LazyBlock />
          </Route>
          <Route exact path='/blockchain'>
            <LazyBlockChain heading='BlockChain' />
          </Route>
          <Route exact path='/distributed'>
            <LazyDistributedBlockChain />
          </Route>
          <Route path='/' exact>
            <Redirect to='/hash' />
          </Route>
          <Route path='*'>
            <Redirect to='/hash' />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
