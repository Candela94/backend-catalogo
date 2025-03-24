import multer from "multer";
import path from 'path';


//Configuración de almacenamiento de MULTER
const storage = multer.diskStorage({


    destination: (req, file, cb) => {    //cb = funcion callback

        //Aquí definimos dónde vamos a subir nuestros archivos
        cb(null, 'public/uploads');
    },



    filename: (req, file, cb) => {

             
            //Opciones de guardar 

            //1. Guardarlo con el nombre q lo subi 
            // cb(null, file.originalname)


            //2. Generar nomnbre único usando la fecha 
            //ej: 


            //3. Generar un nombre único que use el name del input + fecha 
                //ej: imgproud-5678987.jpg


                //saber la extensiom (.jpg,   .png)
                const  fileExt = path.extname(file.originalname);
                const date = new Date().toISOString().replace(/:/g, '-').replace(/\./g, '-');


                //creamos el nuevo nombre del archivo
                const filename = `${file.fieldname}-${date}${fileExt}`;

                cb(null, filename);  

    }

});








export const uploadImg = multer({

    storage: storage,
    limits: {
        fileSize: 5* 1024*1024 //limitar ek upload a 5mb, ESTO ES OPCIONAL. EJEMPLOS DE LO QUE PODEMOS PONER 
    }

});  



export const uploadAny = multer({
    storage: storage
}); //podemos crear los uploads que queramos, para pdf, docs... 


