export function getArray(num) {
  var arrry = [];
  var i;
  for (i = 0; i < num; i++) {
    arrry.push(i);
  }
  return arrry;
}

export function getRandom(num){
  return Math.floor(Math.random() * num);
}
