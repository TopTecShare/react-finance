import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/login';
import Footer from "./components/footer";
import Signup from './pages/signup';
import MainPage from './pages/mainpage';


function App () {
    return (
      <Router>
      <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/mainpage" component={MainPage} />
          <Footer />
      </div>
    </Router>
    );
  }
export default App;
