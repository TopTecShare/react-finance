import React from "react";
import styled from "styled-components";
import {DeletableTile} from "../Shared/Tile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CoinHeaderGridStyled = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
`

export const CoinSymbol = styled.div`
    justify-self: right;
    padding-top: 10px;
`

const DeleteIcon = styled.div`
    justify-self: right;
    display: none;
    ${DeletableTile}:hover & {
        display: block;
        color: red;
    }
`;

export default function({name, symbol, topSection}) {
    return <CoinHeaderGridStyled>
        <div> {name} </div>
        {topSection ? (
            <DeleteIcon>  
                X
                {/* <FontAwesomeIcon icon={["fas", "trash"]} />  */}
            </DeleteIcon>
        ) : (
        <CoinSymbol> {symbol} </CoinSymbol>
        )}
    </CoinHeaderGridStyled>
}