import React from "react";
import Greeting from "./Greeting";
import ConfirmButton from "./ConfirmButton";
import Page from "../Shared/Page";
import CoinGrid from "./CoinGrid";
import Search from "./Search";

export default function() {
    return  <Page name="settings"> 
        <Greeting/> 
        <CoinGrid topSection/>
        <ConfirmButton/> 
        <Search/>
        <CoinGrid/>
    </Page>
}