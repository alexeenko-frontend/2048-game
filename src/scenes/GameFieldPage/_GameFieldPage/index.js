import React, { Component } from "react";

import { GameField } from "./styled";
import Grid from "components/Grid";
import Tile from "components/Tile";
import { STEP, CELLS_COUNT } from "constans";
import { random } from "utils";

class GameFieldComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState(() => ({ data: this.getTiles() }));
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

  getRandomCoordinate() {
    let f = random(0, CELLS_COUNT - 1) * STEP;
    console.log(f);
    return f;
  }

  getTiles() {
    let tiles = [];

    for (let i = 0; i < 2; i++) {
      tiles.push(
        <Tile
          key={`tile-${i}`}
          top={this.getRandomCoordinate()}
          left={this.getRandomCoordinate()}
          value={2}
        />
      );
    }

    return tiles;
  }

  render() {
    return (
      <GameField onKeyDown={this.handleKeyDown} tabIndex="0">
        <Grid />
        <div>{this.state.data.map(item => item)}</div>
      </GameField>
    );
  }
}

export default GameFieldComponent;
