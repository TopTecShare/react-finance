import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/login';
import Footer from "./components/footer";
import Signup from './pages/signup';
import AboutSection from './components/aboutsection';

function App () {
    return (
      <Router>
      <div>
        {/* <section id="sec-1"> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        {/* </section>  */}
          <Footer />
          <AboutSection />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
      </div>
    </Router>
    );
  }
export default App;
