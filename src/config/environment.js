import 'dotenv/config'
export const env = {
  DB_USER: process.env.DB_USER,
  DB_PWD: process.env.DB_PWD,
  DB_NAME: process.env.DB_NAME,
  DB_SERVER: process.env.DB_SERVER,
  TOKEN_SECRET:process.env.TOKEN_SECRET,
  TOKEN_LIFE:process.env.TOKEN_LIFE,
  EMAIL_PASS:process.env.EMAIL_PASS,
  HOST_NAME:process.env.HOST_NAME,
  PORT:process.env.PORT,

  BUILD_MODE:process.env.BUILD_MODE
}