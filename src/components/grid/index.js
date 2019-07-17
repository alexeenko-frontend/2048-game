import React, { Component, Fragment } from "react";

import { Grid, Cell } from "./styled";

class GridComponent extends Component {
  getCells() {
    let cells = [];

    for (let i = 0; i < 16; i++) {
      cells[i] = <Cell key={`cell-${i}`} />;
    }

    return cells;
  }

  render() {
    return (
      <Grid>
        {this.getCells().map(item => {
          return item;
        })}
      </Grid>
    );
  }
}

export default GridComponent;
