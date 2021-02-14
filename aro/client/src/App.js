import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/login';
import Footer from "./components/footer";
import Signup from './pages/signup';
import AboutSection from './components/aboutsection';
// import logo from './images/Screenshot (164).png';


function App () {
    return (
      <Router>
      <div>
      {/* <img src={logo} alt="Logo" id="logo" />; */}
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Footer />
          <AboutSection />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
      </div>
    </Router>
    );
  }
export default App;
