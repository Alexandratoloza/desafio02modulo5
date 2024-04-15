import express from 'express'
import { engine } from 'express-handlebars';
import path from 'path'

/// importacion por defecto

import serviceRoutes from './routes/service.route.js'

import productsRoutes from './routes/product.route.js'

const app = express();

const __dirname = import.meta.dirname;

//public directorio

app.use(express.static(path.join(__dirname, '/public')) )


app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))


//midellwarw body se habilita ocn este codigo :

app.use(express.urlencoded({extended:true}))
app.use(express.json())


//handlebars
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/views'));


app.get('/', (req, res) => {
    res.render('home', {title: "Home Page 2.0"});
});

app.use('/services', serviceRoutes)
app.use('/products', productsRoutes)

/// realizar una ruta con productos 



// error 404
app.get ('/', (req, res) => {
    return res.status(404).render('404', {title: "Pagina no encontrada"})

})



app.listen(5001, () => console.log(`servidor encendido http://localhost:${5001}`))

