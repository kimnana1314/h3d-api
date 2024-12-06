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

export const dbConnect=async()=>{
  return await sql.connect(sqlConfig)
}
 