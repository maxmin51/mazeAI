import React, { Component } from 'react';
import Row from './Row';

class Grid extends Component {


  render(){
    let i = 0;
    let rows = [];
    while (i < this.props.boardState.length) {
      rows.push(<Row
        key={i}
        gridSize={this.props.boardState[i].length}
        slices={this.props.boardState[i]}
        tracksLine={this.props.tracksLine}
        xLines={i}

        />);
      i++;
    }

    return(
      <div className="grid">
        {rows}
      </div>
    );
  }
}

export default Grid;
