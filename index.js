

import express from 'express'
import mongoose from 'mongoose'

import {DOMAIN, PORT} from './config/config.js'
import router from './routes/index.routes.js'
import { conectarDB } from './db/mongoose.js'
import dotenv from 'dotenv'
import cors from 'cors'



const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(cors())



app.get("/", (req, res, next) => {
    res.send("Bienvenido a mi catálogo :)")
})

//FALTA LLAMAR A LA FUNCION obtenerDB
conectarDB();

app.use("/api/v1", router)


app.listen( PORT , () => {
    console.log(`Servidor funcionando en ${DOMAIN}:${PORT}`)
})