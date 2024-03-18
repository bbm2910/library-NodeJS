const fs = require('fs');

//reading files
// fs.readFile('./documents/text1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })



//write files
// fs.writeFile('./documents/text1.txt', 'Some random text text', () => { //overwrite the file if exists
//     console.log('file was written');
// })
// fs.writeFile('./assets/text1.txt', 'Some random text text', () => { //overwrite the file if exists
//     console.log('file was written');
// })

// fs.writeFile('./documents/text2.txt', 'Text in the second file', () => { //create a new file 
//     console.log('file was written 2');
// })

// fs.writeFile('./documents/text3.txt', 'Text in the third file', () => { //create a new file
//     console.log('file was written 3');
// })




//work with directories
// if (!fs.existsSync('./assets')) { //check if the folder exists and if not CREATE one
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('Folder ASSETS was created');
//     })
// }

// if (fs.existsSync('./assets')) { //check if the folder exists and if so DELETE it
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('Folder was deleted');
//     })
// }


//Delete files
if (fs.existsSync('./documents/deleteThisFile.txt')) {
    fs.unlink('./documents/deleteThisFile.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File was deleted');
    })
}