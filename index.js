import express from 'express'
import { engine } from 'express-handlebars';

import { services } from './data/service.data.js'

const app = express();


//public directorio

app.use(express.static('public')) 


app.use('/css', express.static('node_modules/bootstrap/dist/css'))
app.use('/css', express.static('node_modules/bootstrap/dist/js'))
app.use('/css', express.static('node_modules/jquery/dist/js'))

//handlebars
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home', {title: "Home Page 2.0"});
});

app.get('/services', (req, res) => {
    res.render('services', {services: services});
});

app.get('/services', (req, res) => {

    const nameURL= req.params.name

    const service = services.find((item) => item.URL === `/services/${nameURL}`)
    return res.render('service', {service})
})

app.listen(5001, () => console.log(`servidor encendido http://localhost:${5001}`))

