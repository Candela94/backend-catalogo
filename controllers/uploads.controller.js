import { BACKEND_URL } from "../config/config.js";

export const uploadProductImg = async (req,res, next) => {


    try{

        const {id} = req.params

        //recibir imagen

    
        if(!req.file){
            return res.status(400).json({
                success: false, 
                message: "No se ha proporcionado ninguna imagen"
            })
        }


        

        console.log(req.file);
        const imageUrl = `${BACKEND_URL}/uploads/${req.file.filename}`




        
        //guardar "req.file.filename" en la base de datos 


        //responder al usuario



        return res.status(200).json({
            success:"ok",
            message:`Imagen para producto ${id} subida con éxito :)`,
            fileData: req.file,


            data:{  //info sobre la imagen
                imageUrl: imageUrl,
                filename: req.file.originalname,
                peso:`${Math.round(req.file.size/1024)}`,
                size:"500kb"
            }

        })



    } catch(e) {


        next(e)


    }



}; //ruta para subir imagen de producto 
