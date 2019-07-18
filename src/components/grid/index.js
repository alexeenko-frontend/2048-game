import React, { Component, Fragment } from "react";

import { Grid, Cell } from "./styled";
import { STEP, CELLS_COUNT } from "constans";

class GridComponent extends Component {
  getCells() {
    let cells = [];

    for (let i = 0; i < CELLS_COUNT * 4; i++) {
      cells[i] = <Cell key={`cell-${i}`} />;
    }

    return cells;
  }

  render() {
    return <Grid>{this.getCells().map(item => item)}</Grid>;
  }
}

export default GridComponent;
