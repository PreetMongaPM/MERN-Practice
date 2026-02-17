import fs, { write } from 'fs';

const stream = fs.createReadStream('./source.txt');

const writeStream = fs.createWriteStream('./destination.txt');


stream.on('data', chunk =>{
    console.log(chunk.toString());
    writeStream.write(chunk);
});    

stream.on('end', ()=>{
    console.log('Finished reading the file');
})    

writeStream.end();



