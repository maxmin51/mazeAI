export const def_slice = ()=>{
  return {
    blocked: false,
    dead: false
  };
};

export const slice = () => {  
  return {
    blocked: true,
    dead: false
  };
};

export const Start = () => {
  return {
    blocked: false,
    start: true,
    dead: false
  };
};

export const End = () => {
  return {
    blocked: false,
    end: true,
    dead: false
  };
};

export const near = [
  [0,-1],
  [0,1],
  [1,0],
  [-1,0]
];

export const Defaultapp = {
  searchType: "DFS",
  gridSize: [16, 32],
  activated: false,
  boardState: [[]],
  searchEdge: [[[0,0]]]
};
