import jwt from 'jsonwebtoken'
import {JWT_SECRET} from '../config/config.js'



const responseAPI = {
    msg: "",
    data: [],
    status: "ok"

}



export const registerUser = async (req, res, next) => {
    try {

        //1. Traer datos del body 

        const { email, password, name } = req.body;

        //2. verificar si el usuario ya existe 

        const existingUser = await Usuario.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                mensaje: "El usuario con ese emnail ya existe, si eres tú intenta hacer un login"
            });
        }



        //3. crear el nuevo usuario 

        const user = new Usuario({
            email, password, name
        });
        await user.save();



        //4. generar un nuevo token 

        const token = jwt.sign(
            {
                userId: user._id,
                name: user.name,

            },

            JWT_SECRET,

            {
                expiresIn: '2h'
            }


        )

        //5.Devolver datos del usuario + el JWT Token 

        res.status(201).json({
            mensaje: "Usuario registrado correctamente!!!!",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email

                //se hace asi porque si pongo user:user, mando toda la info, cosa que no quiero porque por ejemplo en este caso, no quiero mandar la contraseña
            }
        })



    } catch (e) {


        next(e)
    }
}


export const loginUser = async (req, res, next) => {

    try {


        //traemos datos del body
        const { email, password } = req.body

        //verificamos si existe el usuario 
        const user = await Usuario.findOne({ email }) //me trae el primer usuario que tenga este email 




        //Termino la petición si el usuario no existe 
        // mensaje ok
        // devolver usuario (sin clave ni datos sensibles )
        //generar token

        if (!user) {
            //return res.status(404).json({
            //mensaje: "el usuario con este email ya existe, inténtalo de nuevo"

            return res.status(401).json({
                mensaje: "el usuario o clave inválidos"

            })
        }

        //Comparo la clave del request con la se la base de datos 
        if (password != user.password) {
            res.status(401).json({ message: "Uusario o clave incorrectos" })
        }



        //generamos nuevo token 

        const token = jwt.sign(
            {
                userId: user._id,
                name: user.name,


            },

            JWT_SECRET,


            {
                expiresIn: '2h'
            }
        )


        //Devolvemos datos 

        res.status(201).json({

            mensaje: "Accediste correctamente!!!!",
            token,
            user: {

                id: user._id,
                name: user.name,
                email: user.email

                //se hace asi porque si pongo user:user, mando toda la info, cosa que no quiero porque por ejemplo en este caso, no quiero mandar la contraseña
            }
        })

    } catch (e) {

        next(e)
    }




}
