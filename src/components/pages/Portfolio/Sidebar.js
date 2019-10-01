import React from "react";
import styled, { css } from "styled-components";

const Elements = styled.div`
  ${props =>
    props.active &&
    css`
      color: blue;
    `}
`;
function ControlElements({ name, active }) {
  return <Elements active={active}> {name} </Elements>;
}

export default function() {
  return (
    <div className="sidebarP">
      <ControlElements active name="Inicio" />
      <ControlElements name="Ajustes" />
    </div>
  );
}
