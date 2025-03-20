

import {Router} from 'express'
import { getAllUsuarios, getUsuario, createUsuario, deleteUsuario } from '../controllers/usuarios.controller.js';
import { createProducto, getAllProductos, updateProducto, getProducto, deleteProducto } from '../controllers/productos.controller.js';


const router = Router();

// Listas para admin, cómoun admin puede acceder 

router.get("/productos", getAllProductos)
router.get("/usuarios", getAllUsuarios)
// router.get("/compras", getAllCompras)


//ANTES DE PROGRAMAR CONTROLLERS Y DEMAS, HAY QUE PLANIFICAR ESTO


//crear items como admin
// router.post("/usuarios" , createUsuario) //registro
// router.post("/productos" , createProducto) 
// router.post("/usuarios/:id/compras" , createCompra)  //comprar un producto 


// //obtener info por id 

// router.get("/usuarios/:id" , getUsuarioById)
// router.get("/usuarios/:id/productos-comprados" , getComprasByUserId)





// ---------------------------------
//       CRUD de usuarios 
// ---------------------------------

//obtener usuarios
router.get("/usuarios" , getAllUsuarios)

// //obtener un usuario 
router.get("/usuarios/:id" , )

// //crear 
router.post("/usuarios" , createUsuario)

// //eliminar
router.delete("/usuarios/:id" , deleteUsuario )

//Actualizar
router.put("/usuarios/:id" , )



// ---------------------------------
//       CRUD de productos 
// ---------------------------------


// //crear 
router.post("/productos" , createProducto)


//0btener todos los productos 
router.get("/productos" , getAllProductos)


//Obtener un producto
router.get("/productos/:pid" , getProducto)

//Obtener un producto
router.delete("/productos/:pid" , deleteProducto)


//Actualizar un producto
router.put("/usuarios/:id" , updateProducto  )



export default router;
