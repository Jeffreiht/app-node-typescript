import express from 'express';
import exphbs from 'express-handlebars'
import path from 'path'
import indexRoute from './routes/index.route'
import booksRoute from './routes/books.route'

const app = express();
import './database';

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers')
}));

app.set('view engine', '.hbs');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/', indexRoute)
app.use('/books', booksRoute);

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Starting the Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})