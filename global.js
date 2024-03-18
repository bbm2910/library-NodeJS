//Global object

console.log(global);

setTimeout(() => {
    console.log(' random message after 2 sec');
    clearInterval(intervalExample); //the interval that we set underneath stops
}, 3000);

const intervalExample = setInterval(() => {
    console.log('messsage from the interval every 1 sec'); // This message comes every 1 sec
}, 1000);

console.log(__dirname); //Gets the path of the directory that we are currently in
console.log(__filename); //Gets the path of the file