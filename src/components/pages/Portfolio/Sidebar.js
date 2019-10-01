import React from "react";
import styled, { css } from "styled-components";
import LayoutControlElements from "./LayoutControlElements";
import Context from "./context/Context";

const Elements = styled.div`
  ${props =>
    props.active &&
    css`
      color: #ffffff;
      background-color: #141747;
    `}
`;
function ControlElements({ name }) {
  return (
    <Context.Consumer>
      {({page}) => (
      <Elements active={ page === name }> {name} </Elements>        
      )}
    </Context.Consumer>
  )
}

export default function() {
  return (
    <div className="sidebarP">
      <LayoutControlElements>
        <ControlElements name="Inicio" className="elementsSidebar" />
      </LayoutControlElements>
      <LayoutControlElements>
        <ControlElements name="Balance" className="elementsSidebar" />
      </LayoutControlElements>
      <LayoutControlElements>
        <ControlElements name="Ajustes" className="elementsSidebar" />
      </LayoutControlElements>
    </div>
  );
}
