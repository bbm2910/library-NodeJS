const data = require('./people'); //This runs the file that we required
console.log(data);
console.log(data.people);
console.log(data.ages);


//Or we can also do this
const { people, ages } = require('./people');
console.log(people);
console.log(ages);

