import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  AreaOfTriangle,
  HoursMinutesSeconds,
  MaximumEdge,
  StringRepeat,
  AppBarMenu, 
  Directions, 
  NotFound
} from './components/index'


export default function App() {
  return (
    <Router>
      <div>
       <AppBarMenu />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/">
           <Directions /> 
          </Route>
          <Route path="/areaOfTriangle">
            <AreaOfTriangle />
          </Route>
          <Route path="/stringRepeat">
            <StringRepeat />
          </Route>
          <Route path="/hoursMinutesToSeconds">
            <HoursMinutesSeconds />
          </Route>
          <Route path="/maximumEdge">
            <MaximumEdge />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}