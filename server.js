//Create a server

const http = require('http');
const fs = require('fs');
//Lodash
const _ = require('lodash');

const server = http.createServer((request, response) => {
    // console.log(request);
    // console.log(request.url);
    // console.log(request.method);

    //Lodash - just basic example of how to use it
    const randomNumber = _.random(0, 20);
    console.log(randomNumber);

    const greet = _.once(() => {
        console.log('Hello once');
    })
    greet();


    //set header content type
    response.setHeader('Content-Type', 'text-html');


    //Routing
    let path = './views/';
    switch (request.url) {
        case '/':
            path += 'index.html';
            response.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            response.statusCode = 200;
            break;
        case '/about-us':
            response.setHeader('Location', '/about') //redirect from about-me to about
            response.statusCode = 301;
            response.end();
            break;
        default:
            path += '404.html';
            response.statusCode = 404;

    }

    //send a html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            response.end();
        }
        else {
            response.write(data);
            response.end();
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
})

//Also here we installed nodemon globally on the computer so it can restart the server when we run nodemon server. With this we don't need to stop and start the server every time we do a change on the file.