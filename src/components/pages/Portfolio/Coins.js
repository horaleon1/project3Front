import React from "react";
import Context from "./context/Context";
import styled from 'styled-components';




export default function Coins(props) {
  return (
    <Context.Consumer>
      {({ coinList }) => {
        if (!coinList) {
          return <div>Cargando Monedas</div>;
        } else {
          return <div>{props.children}</div>;
        }
      }}
    </Context.Consumer>
  );
}
