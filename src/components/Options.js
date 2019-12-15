
import React from 'react';
import Button from '@material-ui/core/Button';

function Options(props) {
  return (
    <div>
      <text style={styles.mztxt}>MaZe</text>
        <div className="control__panel">
          <Button variant="contained" onClick={props.random}> Reset </Button>
            <div>
              <select style={styles.spl} onChange={props.pickType} value={props.type}>
                <option value="DFS">DFS جستجو عمقی </option>
                <option value="BFS">BFS جستجو سطری </option>
                <option value="Greedy">Greedy جستجو حریصانه</option>
                <option value="A*">A* </option>
              </select>
            </div>
          <Button variant="contained" color="primary" onClick={props.solveing}> Start </Button>
      </div>
    </div>
  );
}

const styles={
  spl:{
    fontSize:20,
    backgroundColor:"#F1F1F1"
  },
  mztxt:{
    fontSize:25,
    marginBottom:100
  }
}


export default Options;

