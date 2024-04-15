import{ Router} from 'express'
import { services } from '../data/service.data.js';

///crear ruta services



const router = Router ()


router.get('/services', (req, res) => {
    return  res.render('services', {services: services});
  });
  
  router.get ('/services/:name', (req, res) => { 
  
     const nameURL = req.params.name
     const service = services.find((item) => item.url === `/services/${nameURL}`)
  
      if (!service){
          return res.render('404', {title: "Pagina no encontrada"})
      }
     return res.render('service', {service})
  },)


  

  export default router;