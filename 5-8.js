let map = new Map();
map.set ('telephone', 9346748594);
map.set ('country', 'russia');
map.set('age', 21);

const mapKeys = map.keys();

console.log(`Ключ-${mapKeys.next().value} ` + `Значение-${map.get('telephone')}`); 
console.log(`Ключ-${mapKeys.next().value} ` + `Значение-${map.get('country')}`); 
console.log(`Ключ-${mapKeys.next().value} ` + `Значение-${map.get('age')}`); 