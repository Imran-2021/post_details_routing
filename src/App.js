import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import PostComments from "./Components/PostComments";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home">
          <Home />
          </Route>
          <Route path="/post-comments/:abc">
          <PostComments />
          </Route>
          <Route exact path="/">
          <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
