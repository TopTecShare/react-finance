import React, { Component } from "react";
import "../Application/App.css"
import AppLayout from "../Application/AppLayout";
import AppBar from "../Application/AppBar";
import {AppProvider} from "../Application/AppProvider";
import Settings from "../Settings";
import Content from "../Shared/Content";
import Dashboard from "../Dashboard"
import AboutUs from "../Aboutus"

function MainPage () {
    return (
        <AppLayout> 
            <AppProvider>
              <AppBar />
              <Content>
              <Settings />
              <Dashboard />
              <AboutUs />
              </Content>
            </AppProvider>
        </AppLayout>
        );
  }
export default MainPage;


