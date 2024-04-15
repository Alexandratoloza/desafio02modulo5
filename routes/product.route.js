import{ Router} from 'express'
import { products } from '../data/products.data.js';

///crear ruta services



const router = Router ()


router.get('/', (req, res) => {
///leer queris

const {order, search, limit} = req.query

if (order === 'asc'){
    products.sort((a, b ) => {a.price - b.price })
}

if (order === 'desc'){
    products.sort((a, b ) => {b.price - a.price })
}
    return  res.render('products', {products: products});
  });
  

router.post ('/add', (req, res) => {

    console.log (req.body) /// con el req.body sale undefine 
    //7ya q no recibe la informacion ya que esta deshabilitado, no funciona

    res.render('products', {products})
})


export default router;