import sql from 'mssql'
import { env } from '~/config/environment'
const  sqlConfig = {
  user: env.DB_USER,
  password: env.DB_PWD,
  database: env.DB_NAME,
  server: env.DB_SERVER,
  options: {
      encrypt: false,
      trustServerCertificate: true,
  },
  port: 1433
}
let CONNECT_DB =null
export const dbConnect=async()=>{
    CONNECT_DB=await sql.connect(sqlConfig)
}
 
export const GET_DB=()=>{
  if (!CONNECT_DB) throw new Error('Kêt nối database trươc')
    return CONNECT_DB
}