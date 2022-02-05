import './App.css';
import {BrowserRouter} from 'react-router-dom'
import {Route,Switch} from 'react-router-dom'
import Login from './components/Login';
import Goal from './components/Goal';
import React from 'react';
import Activity from './components/Activity';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path = "/goal">
              <Goal />
            </Route>
            <Route path = "/activity">
              <Activity />
            </Route>
            <Route path = "/profile">
              <Profile />
            </Route>
            <Route path = "">
              <Login />
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
