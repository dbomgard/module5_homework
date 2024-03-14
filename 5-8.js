let map = new Map();
map.set ('telephone', 9346748594);
map.set ('country', 'Russia');
map.set('age', 21);

for (const [key, value] of map) {
  console.log(`Ключ — ${key}, значение — ${value}`);
}