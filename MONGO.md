

## vincular modos en mongo 

en nuestra carpeta models, tenemos varios modelos:

- compras.model 
- usuario.model 
- producto.model 


### usuario 

vincular que un usuario tenga muchas compras 

```js



const usuarioSchema = new.mongoose.Schema({


    compras: [{
        type: mongoose.Schema.Types.ObjectId, ref:'Compra'
    }]  //vinculamos las compras del usuario 
        //'compra' es el modelo compra que voy a crear
        //luego las compras las relacionaremos en el modelo de productos

})



const productoSchema = new.mongoose.Schema({


    compras: [{
        type: mongoose.Schema.Types.ObjectId, ref:'Compra'
    }]  //vinculamos las compras del usuario 
        //'compra' es el modelo compra que voy a crear
        //luego las compras las relacionaremos en el modelo de productos

})

export const Producto = mongoose.model("Producto", productoSchema)

```