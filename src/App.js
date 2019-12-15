import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid';
import Options from './components/Options';
import {
  def_slice,
  Start,
  End,
  slice,
  near,
  Defaultapp} from './settings/consts';
import { aStar,greeedy } from './settings/Algorithms';
import {last} from './settings/last';

class App extends Component {

  constructor(){
    super();
    this.state = Defaultapp;
    this.generatemaze = this.generatemaze.bind(this);
    this.random = this.random.bind(this);
    this.solve = this.solve.bind(this);
    this.solveing = this.solveing.bind(this);
    this.searchStep = this.searchStep.bind(this);
    this.pickType = this.pickType.bind(this);
    this.tracksLine = this.tracksLine.bind(this);
    this.checksolving = this.checksolving.bind(this);
    setTimeout(this.random,0);
  }

  tracksLine(event){
    let lines = event.target.id.split(",");
    let board = this.state.boardState;
    let prev = board[lines[0]][lines[1]].blocked;
    if(prev){
      board[lines[0]][lines[1]].blocked = false;
    }else{
      board[lines[0]][lines[1]].blocked = true;
    }
    this.setState({boardState: board});
  }

  pickType(event){
    this.setState({searchType: event.target.value});
  }

  

  solveing(){
    this.solve(30);
  }

  solve(time){
    if (this.state.activated === true) return;
    this.setState({activated: true});
    this.interval = setInterval(this.searchStep, time);
  }

  validTile(tile, boardState){
    if(tile[0] < 0 || tile[0] >= this.state.gridSize[0]){
      return false;
    }
    if(tile[1] < 0 || tile[1] >= this.state.gridSize[1]){
      return false;
    }
    let targetTile = boardState[tile[0]][tile[1]];
    if(targetTile.dead || targetTile.blocked || targetTile.border){
      return false;
    }
    return true;
  }
   

  checksolving(el, adj, border, boardState){
    if (boardState[adj[0]][adj[1]].end === true){
      for (let j = 0; j < el.length; j++) {
        boardState[el[j][0]][el[j][1]].solution = true;
      }
      boardState[adj[0]][adj[1]].solution = true;
      clearInterval(this.interval);
      this.setState({searchEdge: border, boardState: boardState});
      setTimeout( ()=>{alert("Maze is solved!");} , 100);
      return true;
    }
    return false;
  }

  searchStep(){
    let border = this.state.searchEdge;
    if (border.length === 0){
      clearInterval(this.interval);
      alert("Maze is impossible!");
      return;
    }

    let boardState = this.state.boardState;
    let el;
    if(this.state.searchType === "DFS"){
      el = border.pop();
    } else {
      el = border.shift();
    }
    boardState[last(el)[0]][last(el)[1]].dead = true;
    for (let i = 0; i < near.length; i++) {
      let adj = near[i];
      adj = [last(el)[0]+adj[0],last(el)[1]+adj[1]];
      if (this.validTile(adj, boardState)){
        boardState[adj[0]][adj[1]].border = true;
        border.push(el.concat([adj]));
        if(this.checksolving(el, adj, border, boardState)) {return;}
      }
    }
    if(this.state.searchType === "A*") {
      border = border.sort(aStar);
    }
    if(this.state.searchType === "Greedy") {
      border = border.sort(greeedy);
    }
    this.setState({searchEdge: border, boardState: boardState});
  }
  

  random() {
    clearInterval(this.interval);
    this.setState({
      activated: false,
      boardState: this.generatemaze('random'),
      searchEdge: [[[0,0]]]
    });
  }

  generatemaze(type) {
    let size = this.state.gridSize;
    let ary = new Array(size[0]);
    for (let i = 0; i < ary.length; i++) {
      ary[i] = new Array(size[1]);
      for (let j = 0; j < ary[i].length; j++) {
        if (type === 'clear') {
          ary[i][j] = def_slice();
        } else {
          if ((parseInt(Math.random() * 4) < 1) && (i > 1 || j > 1)) {
            ary[i][j] = slice();
          } else {
            ary[i][j] = def_slice();
          }
        }
      }
    }
    ary[0][0] = Start();
    ary[size[0] - 1][size[1] - 1] = End();
    return ary;
  }

  render() {

    return (
      <div className="App">
        <Grid gridSize={this.state.gridSize}
          boardState={this.state.boardState}
          tracksLine={this.tracksLine}/>
        <Options
          pickType={this.pickType}
          type={this.state.searchType}
          random={this.random}
          solveing={this.solveing}

          />
      </div>
    );
  }
}

export default App;
