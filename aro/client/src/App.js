import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/login';
import Footer from "./components/footer";
import Signup from './pages/signup';
import Wrapper from './components/Wrapper'


function App () {
    return (
      <Wrapper>
      <Router>
      <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
        <Footer />
      </div>
    </Router>
    </Wrapper>
    );
  }
export default App;
