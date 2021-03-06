import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import Destination from './components/Destination/Destination';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <PrivateRoute exact path="/destination">
            <Destination />
          </PrivateRoute>

          <PrivateRoute path="/destination/:vehicleName">
            <Destination />
          </PrivateRoute>

          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
