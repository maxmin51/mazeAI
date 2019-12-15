import React from 'react';

function Slice(props) {
  return(
    <div className={`slice blocked--${props.showProps.blocked}
                    start--${props.showProps.start}
                    end--${props.showProps.end}
                    dead--${props.showProps.dead}
                    border--${props.showProps.border}
                    tracksol--${props.showProps.solution}`}
                    id={[props.xLines, props.yLines]}
                    onClick={props.tracksLine}> </div>
  );
} 

export default Slice;
