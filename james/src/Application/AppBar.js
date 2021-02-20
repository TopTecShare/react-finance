import React from "react";
import styled, {css} from "styled-components";
import {AppContext} from "./AppProvider";

const Logo = styled.div`
font-size: 2.5em;
`

const Bar = styled.div`
    display: grid;
    grid-template-columns: 350px auto 100px 100px;
    margin-bottom: 40px;
`

const ControlButtonElement = styled.div`
    cursor: pointer;
    ${props => props.active && css`
        text-shadow: 12px 12px 6px #515dff;
    `}
    ${props => props.hidden && css`
        display: none;
    `}
`

function toProperCase(lower) {
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name}) {
    return (
    <AppContext.Consumer>
        {({firstVisit, page, setPage}) => (
        <ControlButtonElement 
        active={page === name}
        onClick={() => setPage(name)}
        hidden={firstVisit && name === "dashboard"}
        >
            {toProperCase(name)}
        </ControlButtonElement>
        )}
    </AppContext.Consumer>
    )
}

export default function() {
    return (
        <Bar>
        <Logo>Crypto-Tracker</Logo>
        <div/>
        <ControlButton active name="dashboard" />
        <ControlButton name="settings" />
    </Bar>
    )
}