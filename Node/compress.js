import fs from 'fs';
import zlib from 'zlib'
fs.createReadStream('source.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('source.txt.gz'));