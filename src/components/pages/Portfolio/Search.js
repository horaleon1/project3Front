import React, { Component } from "react";
import styled from "styled-components";
import Context from "./context/Provider";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;
const Input = styled.input`
  width: 80%;
  border-radius: 20px;
  border: 1px solid #141747;
  font-size: 1.4rem;
  height: 2rem;
`;

export default class Search extends Component {
  render() {
    return (
        <div className="searchContainer">
          <Grid>
            <h3>Buscar</h3>
            <Input />
          </Grid>
        </div>
    );
  }
}
