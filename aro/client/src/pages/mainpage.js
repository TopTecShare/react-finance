import React, { Component } from "react";
import "../Application/App.css"
import Greeting from "../Settings/Greeting";
import AppLayout from "../Application/AppLayout";
import AppBar from "../Application/AppBar";
import {AppProvider} from "../Application/AppProvider";
import Settings from "../Settings";
import Content from "../Shared/Content";
import Dashboard from "../Dashboard"

function MainPage () {
    return (
        <AppLayout> 
            <AppProvider>
              <AppBar />
              <Content>
              <Settings />
              <Dashboard />
              </Content>
            </AppProvider>
        </AppLayout>
        );
  }
export default MainPage;


