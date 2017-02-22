export function intersect(a, b) {
  if( a === undefined || b === undefined)
    return []
  var setA = new Set(a);
  var setB = new Set(b);
  var intersection = new Set([...setA].filter(x => setB.has(x)));
  return Array.from(intersection);
}

export function union(a, b){
  if( a === undefined || b === undefined){
    return []
  }
  else if( a === undefined){
    return b
  }
  else if( b === undefined){
    return a
  }
  else{
    const union = [...new Set([...a, ...b])];
    return union;
  }
}
