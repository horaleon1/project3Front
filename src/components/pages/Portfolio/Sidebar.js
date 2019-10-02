import React from "react";
import styled, { css } from "styled-components";
import LayoutControlElements from "./LayoutControlElements";
import Context from "./context/Context";

const Elements = styled.div`
  ${props =>
    props.active &&
    css`
      color: #e73546;
      cursor:pointer;
    `}
`;
function ControlElements({ name }) {
  return (
    <Context.Consumer>
      {({page, setPage}) => (
      <Elements active={ page === name } onClick={ () => setPage(name)}> {name} </Elements>        
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
