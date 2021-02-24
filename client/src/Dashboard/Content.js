import React from "react";
import styled, { withTheme } from "styled-components";
import {AppContext} from "../Application/AppProvider";
import CoinImage from "../Shared/CoinImage";
const ContentPanel = styled.div`
    // display: grid;
    // grid-template-columns: auto;
    // justify-self: center;
`
export default function () {
    // const currencySymbolArray = [
    //     GeorgiaLari,
    //     Ethereum, 
    //     UsaDollar,
    //     RussiaRuble,
    //     BangladeshiTaka,
    //     Bitcoin,
    //     ChinaYuan,
    //     Monero,
    //     BritainPound
    // ]
    return (
       <div className="marquee">
           <ul className="marquee-content">
               <li>
                    <a href="https://en.wikipedia.org/wiki/Georgian_lari" target="_blank">₾</a>
               </li>
               <li>
                    <a href="https://en.wikipedia.org/wiki/Ethereum" target="_blank">Ξ</a>
               </li>
               <li>
                    <a href="https://en.wikipedia.org/wiki/United_States_dollar" target="_blank">$</a>
               </li>
               <li>
                    <a href="https://en.wikipedia.org/wiki/Ruble" target="_blank">₽</a>
               </li>
               <li>
                    <a href="https://en.wikipedia.org/wiki/Bangladeshi_taka" target="_blank">₺</a>
               </li>
               <li>
                    <a href="https://en.wikipedia.org/wiki/Bitcoin" target="_blank">₿</a>
               </li>
               <li>
                    <a href="https://en.wikipedia.org/wiki/Yuan_(currency)" target="_blank">元</a>
               </li>
               <li>
                    <a href="https://en.wikipedia.org/wiki/Monero" target="_blank">ɱ</a>
               </li>
               <li>
                    <a href="https://en.wikipedia.org/wiki/Pound_sterling" target="_blank">£</a>
               </li>
               <li>
                    <a href="https://en.wikipedia.org/wiki/Georgian_lari" target="_blank">₾</a>
               </li>
               <li>
                    <a href="https://en.wikipedia.org/wiki/Ethereum" target="_blank">Ξ</a>
               </li>
               <li>
                    <a href="https://en.wikipedia.org/wiki/United_States_dollar" target="_blank">$</a>
               </li>
               <li>
                    <a href="https://en.wikipedia.org/wiki/Ruble" target="_blank">₽</a>
               </li>
           </ul>
       </div>
    )
}















