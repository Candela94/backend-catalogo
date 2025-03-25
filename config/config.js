import dotenv from 'dotenv'

dotenv.config();

export const PORT = process.env.PORT || 3002;
export const DOMAIN = process.env.DOMAIN || "http://localhost"



export const DB_USER =  process.env.DB_USER || "candelafsg";
 export const DB_PASS =  process.env.DB_PASS || "Juanotee77"
 export const CLUSTER =  process.env.DB_CLUSTER || "cei-practicas.k3hx5.mongodb.net"
 export const DATABASE = process.env.DATABASE ||  "catalogo"

 export const JWT_SECRET = process.env.JWT_SECRET ||  "Et34WzL=fh5QoVw"