export function intersect(a, b) {
  var setA = new Set(a);
  var setB = new Set(b);
  var intersection = new Set([...setA].filter(x => setB.has(x)));
  return Array.from(intersection);
}

export function union(a, b){
  const union = [...new Set([...a, ...b])];
  return union;
}