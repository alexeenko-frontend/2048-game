import React, { Component } from "react";

import styled from "styled-components";

import Grid from "components/grid";
import Tile from "components/tile";

const GameField = styled.div`
  position: relative;
  border: 15px solid transparent;
  display: flex;
  width: max-content;
`;

class Home extends Component {
  render() {
    return (
      <GameField>
        <Grid />
        <div>
          <Tile />
        </div>
      </GameField>
    );
  }
}

export default Home;
