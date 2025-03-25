

import {Router} from 'express'
import { getAllUsuarios, getUsuario, createUsuario, deleteUsuario } from '../controllers/usuarios.controller.js';
import { createProducto, getAllProductos, updateProducto, getProducto, deleteProducto } from '../controllers/productos.controller.js';


import {  uploadImg } from '../middlewares/upload.middleware.js';

import { uploadProductImg } from '../controllers/uploads.controller.js';

const router = Router();

// Listas para admin, cómoun admin puede acceder 

router.get("/productos", getAllProductos)
router.get("/usuarios", getAllUsuarios)
// router.get("/compras", getAllCompras)





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
router.get("/usuarios/:id" , getUsuario)

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
router.put("/productos/:pid" , updateProducto  )



// ---------------------------------
//            UPLOADS
// ---------------------------------

router.put("/productos/:id/imagen", uploadImg.single('imgprod') ,uploadProductImg) //ruta para subir una imagen 













// router.post("/producto/upload", uploadImg.single('imgprod') ,   (req,res, next) => {


//     try{

//         //recibir imagen

    
//         if(!req.file){
//             return res.status(400).json({
//                 success: false, 
//                 message: "No se ha proporcionado ninguna imagen"
//             })
//         }

//         console.log(req.file);
//         const imageUrl = `${BACKEND_URL}/uploads/${req.file.filename}`




        
//         //guardar "req.file.filename" en la base de datos 


//         //responder al usuario



//         return res.status(200).json({
//             success:"ok",
//             message:"Imagen subida con éxito :)",
//             fileData: req.file,


//             data:{  //info sobre la imagen
//                 imageUrl: imageUrl,
//                 peso:`${Math.round(req.file.size/1024)}`,
//                 size:"500kb"
//             }

//         })



//     } catch(e) {


//         next(e)


//     }



// }); //ruta para subir imagen de producto 



export default router;
