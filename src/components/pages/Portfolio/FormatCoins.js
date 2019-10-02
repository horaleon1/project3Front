import React from "react";
import styled from "styled-components";
import Context from "./context/Context";

const Format = styled.div`
  display: grid;
`;

export default function FormatCoins() {
   return (
   <Context.Consumer>
      {
        ({coinList}) => <Format>
          {Object.keys(coinList).length}
        </Format>
      }
    </Context.Consumer>
   )
}
