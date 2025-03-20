
import { Producto } from "../db/models/producto.model.js";



const responseAPI = {
    msg: "",
    data: [],
    status :"ok"
}




//Crear un producto

export const createProducto = async (req,res,next) => {

    
    const {nombre,descripcion, precio} = req.body;
    

    try{

        const nuevoProducto = await Producto.create({nombre, descripcion, precio});
        responseAPI.data= nuevoProducto;
        responseAPI.msg = `Producto ' ${nombre} ' con precio ${precio}`
        responseAPI.status = 'ok';
        
        res.status(200).json(responseAPI)
        
    } catch(e){
        console.error("tuvimos un error ", e)
        next(e)
    }
   
}



//Obtener todos los productos 

export const getAllProductos = async (req, res, next) => {

    try {

        const producto = await Producto.find();
        responseAPI.data = producto;
        responseAPI.msg = "Productos encontrados con éxito"
        responseAPI.status = 'ok';

        res.status(200).json(responseAPI)

    } catch (e) {
        console.error("tuvimos un error ", e)
        next(e)
    }

}



//Obtener un producto 

export const getProducto = async (req, res, next) => {

    const { pid } = req.params



    try {

        const producto = await Producto.findById(pid);
        responseAPI.data = producto;
        responseAPI.msg = `Producto con id ${pid} encontrado con éxito`
        responseAPI.status = 'ok';

        res.status(200).json(responseAPI)

    } catch (e) {
        console.error("tuvimos un error ", e)
        next(e)
    }

}



//Eliminar un producto 

export const deleteProducto = async (req, res, next) => {


    const { pid } = req.params

    try {

        const eliminado = await Producto.findByIdAndDelete(pid);
        responseAPI.data = eliminado;
        responseAPI.msg = `Alumnos con id ${pid} eliminado con éxito`
        responseAPI.status = 'ok';

        res.status(200).json(responseAPI)

    } catch (e) {
        console.error("tuvimos un error ", e)
        next(e)
    }

}



// Actualizar un usuario 
export const updateProducto = async (req, res, next) => {

    
    const { pid } = req.params
    const { nombre , precio, descripcion } = req.body



    try {

        const actualizado = await Alumno.findByIdAndUpdate(pid, 
            { 
                nombre:nombre,
                precio: precio,
                descripcion: descripcion

            }, { new: true });

        responseAPI.data = actualizado;
        responseAPI.msg = `Producto con id ${pid} ha sido actualizado con éxito`
        responseAPI.status = 'ok';

        res.status(200).json(responseAPI)

    } catch (e) {
        console.error("tuvimos un error ", e)
        next(e)
    }
}