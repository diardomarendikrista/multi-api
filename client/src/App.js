import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Detail from './pages/Detail';
import List from './pages/List';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router >
      <Navbar />
      <Switch>
        <Route path="/not-found">
          <NotFound />
        </Route>
        <Route path="/:categoryName/:id">
          <Detail />
        </Route>
        <Route path="/:categoryName">
          <List />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
