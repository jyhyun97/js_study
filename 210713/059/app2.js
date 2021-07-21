import * as a from './add.js';
import './sideeffect.js';

console.log(a.version);
console.log(a.add);

const added = a.add(1, 2);
console.log(added);

hello('harin');