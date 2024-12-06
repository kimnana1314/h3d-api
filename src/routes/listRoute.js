import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { listValidation} from '~/validations/listValidation'

const Router=express.Router()
Router.route('/')
.get((req,res)=>{
  res.status(StatusCodes.OK).json({message:'Get: API get list'})
})
.post(listValidation.createNew)

export const listRoute=Router