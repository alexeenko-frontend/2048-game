import React, { Component } from "react";

import { Tile } from "./styled";

class TileComponent extends Component {
  render() {
    return <Tile {...this.props}>{this.props.value}</Tile>;
  }
}

export default TileComponent;
