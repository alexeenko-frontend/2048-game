import React, { Component } from "react";

import { GameField } from "./styled";
import Grid from "components/grid";
import Tile from "components/tile";
import { STEP, CELLS_COUNT } from "constans";

class GameFieldComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      top: 0,
      left: 0
    };
  }

  handleKeyDown = e => {
    switch (e.keyCode) {
      case 38: // up
        if (this.state.top >= STEP) {
          this.setState(prevState => ({
            top: prevState.top - STEP
          }));
        }
        break;
      case 40: // down
        if (this.state.top < STEP * (CELLS_COUNT - 1)) {
          this.setState(prevState => ({
            top: prevState.top + STEP
          }));
        }
        break;
      case 37: // left
        if (this.state.left >= STEP) {
          this.setState(prevState => ({
            left: prevState.left - STEP
          }));
        }
        break;
      case 39: // right
        if (this.state.left < STEP * (CELLS_COUNT - 1)) {
          this.setState(prevState => ({
            left: prevState.left + STEP
          }));
        }
        break;
    }
  };

  render() {
    const { top, left } = this.state;

    return (
      <GameField onKeyDown={this.handleKeyDown} tabIndex="0">
        <Grid />
        <div>
          <Tile top={top} left={left} />
        </div>
      </GameField>
    );
  }
}

export default GameFieldComponent;
