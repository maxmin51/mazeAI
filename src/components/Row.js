import React from 'react';
import Slice from './Slice';

function Row(props) {
    let j = 0;
    let slices = [];

    while (j < props.gridSize){
      slices.push(<Slice
        key={j}
        showProps={props.slices[j]}
        tracksLine={props.tracksLine}
        xLines={props.xLines}
        yLines={j}/>);
      j++;
    } 

    return(
      <div className="row">{slices}</div>
    );
}

export default Row;
