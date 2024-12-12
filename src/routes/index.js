import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { unitRoute } from './unitRoute'
const Router=express.Router()

Router.get('/status',(req,res)=>{
  res.status(StatusCodes.OK).json({message:'APIs V1 are ready to use.'})
})

Router.use('/unit',unitRoute)
export const APIs_V1 =Router