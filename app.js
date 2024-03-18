//Use Express to create a express app
const express = require('express');

//Morgan - HTTP request logger middleware
const morgan = require('morgan');

//Mongoose
const mongoose = require('mongoose');

const bookRoutes = require('./routes/bookRoutes');

//Express app
const app = express();

//connect to mongoDB
const dbURI = 'mongodb+srv://user1:testpassword123@nodejs.cikhccz.mongodb.net/modejs?retryWrites=true&w=majority&appName=nodejs';
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))  //Listen for requests
    .catch((err) => console.log(err))


//Register view engine - in this case ejs
app.set('view engine', 'ejs');


//middleware and static files (css, images...)
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))

//mongoose and mongo sandbox routes
// app.get('/add-book', (req, res) => {
//     const book = new Book({
//         title: 'new book',
//         snippet: 'about my new book',
//         body: 'more things about my new book that I just read'
//     })

//     book.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

// some other examples
// app.get('/all-books', (req, res) => {
//     Book.find()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })

// app.get('/single-book', (req, res) => {
//     Book.findById('65f05fd803f4971e72d51072')
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })


//Routes
app.get('/', (req, res) => {
    res.redirect('/books')
})

app.get('/about', (req, res) => {
    // res.send('<p>Aboutpage from Express</p>')
    // res.sendFile('./views/about.html', { root: __dirname })
    res.render('about', { title: 'About' });
})

//Redirects if needed
// app.get('/about-us', (req, res) => {
//     res.redirect('about')
// })

//book routes
app.use('/books', bookRoutes)


//404 page - always has to be at the bottom of the code. Acts like a catch-all
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname })
    res.status(404).render('404', { title: '404 Not Found' });
})