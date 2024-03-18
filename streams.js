const fs = require('fs');


//Read a stream of data - skip enconding and you get the stream and not the string or whatever is inside
const readStream = fs.createReadStream('./documents/text4.txt', { encoding: 'utf8' });
// readStream.on('data', (chunkOfData) => {
//     console.log('---new chunk of data---');
//     console.log(chunkOfData);
// })



//Write a stream 
const writeStream = fs.createWriteStream('./documents/text5.txt');
// readStream.on('data', (chunkOfData) => {
//     console.log('---new chunk of data---');
//     console.log(chunkOfData);
//     writeStream.write('\nNEW CHUNK OF DATA\n');
//     writeStream.write(chunkOfData); //This is how we pass data down a stream
// })


//Piping - same thing as above, just easier
readStream.pipe(writeStream);