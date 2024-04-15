import{ Router} from 'express'
import { products } from '../data/products.data.js';

///crear ruta services



const router = Router ()


router.get('/', (req, res) => {
///leer queris

const {order} = req.query
if (order === 'asc'){
    products.sort((a, b ) => {a.price - b.price })
}


    return  res.render('products', {products: products});
  });
  



export default router;