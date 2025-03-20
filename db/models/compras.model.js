
import mongoose from "mongoose"


const options = {
    collection:'users',          //nombre de la coleccion en mongoDB
    strict:true,                    //solo permie guardar los campos definidos en el esquema 
    collation: {
        locale:"es",                //idioma
        strength: 1,                //nivel de comparacion de strings(1: ignora mayúsculas, minusculas  y tildes. nos permite asi hacer búsquedas más flexibles)
    }
}



const comprasSchema = new mongoose.Schema({

    productos: [{type: mongoose.Schema.types.ObjectId, ref: 'Product'}],
    usuarios: [{type: mongoose.Schema.types.ObjectId, ref: 'Usuario'}],
    fecha: {type: Date, default: Date.now}

}, options )


export const Compra = mongoose.model("Compra", comprasSchema)