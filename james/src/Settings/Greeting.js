import React from "react";
import {AppContext} from "../Application/AppProvider";

export default function ({firstVisit}) {
    return (
      <AppContext.Consumer>
        {({firstVisit}) =>
        firstVisit ? <div>
          Welcome to Crypto-Tracker, please begin by selecting 5 coins to follow.{''}
        </div> : null
      }
      </AppContext.Consumer>
    )
  };