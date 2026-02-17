import fs from 'fs';

const buffer = Buffer.from('Hello, PM!');

const str = buffer.toString('utf-8');
console.log(str);
console.log(buffer);