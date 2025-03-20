



import mongoose from 'mongoose'

const options = {
    collection: 'producto',
    strict: true,

    collation: {
        locale:"es",
        strength: 1,
    }
}


const productoSchema = new mongoose.Schema({

    nombre: String, 
    descripcion: String,
    imagen: String,
    precio: Number,

    propietario: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },  //mi campo usuario es obligatorio

    compras: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Compra'
    }]

}, options)


export const Producto = mongoose.model("Producto", productoSchema)