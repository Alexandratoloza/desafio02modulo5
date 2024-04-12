import express from 'express'
import { engine } from 'express-handlebars';

const app = express();

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.listen(5001, () => console.log(`servidor encendido http://localhost:${5001}`))

