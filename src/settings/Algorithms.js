import last from './last';

export const aStar = function(list1, list2){
  let value1 = last(list1)[0] + last(list1)[1] - list1.length;
  let value2 = last(list2)[0] + last(list2)[1] - list2.length;
  if(value1 > value2){return -1;}
  if(value2 > value1){return 1;}
  if(list1.length > list2.length){return 1;}
  if(list2.length > list1.length){return -1;}
  return 0;
};

export const greeedy = function(list1, list2){
  let value1 = last(list1)[0] + last(list1)[1];
  let value2 = last(list2)[0] + last(list2)[1];
  if(value1 > value2){return -1;}
  if(value2 > value1){return 1;}
  return 0;
};

