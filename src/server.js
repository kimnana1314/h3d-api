import express from 'express'
import { dbConnect,GET_DB } from '~/config/dbConnect'
import { env } from '~/config/environment'

import { errorHandlingMiddleware } from '~/middlewares/errorHandlingMiddleware'
import { APIs_V1 } from '~/routes/index'
const START_SERVER=()=>{
  const app =express()
  app.use(express.json())
  app.use('/v1',APIs_V1)
  // Middlewares xử lý lỗi tập trung
  app.use(errorHandlingMiddleware)
  app.listen(env.PORT,env.HOST_NAME,()=>{
    console.log(`3. Server run :${env.HOST_NAME} port:`,env.PORT)
  })
}

(async()=>{
  try
  {
    console.log('1. Connecting to db server')
    await dbConnect()
    console.log('2. Connected to db server')
    START_SERVER()
  } catch (e) {
    console.log(e)
    process.exit(0)
  }
})()


