import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/login';
import Footer from "./components/footer";
import Signup from './pages/signup';
import MainPage from './pages/mainpage';
import PrivateRoute from './private'


function App () {


    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute
          exact path="/mainpage" 
          component={MainPage} 
          isAuthenticated= {true}
          />
        </Switch>
      <Footer />
      </div>
    </Router>
    );
  }
export default App;
