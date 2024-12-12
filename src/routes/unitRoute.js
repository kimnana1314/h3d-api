import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { unitValidation} from '~/validations/unitValidation'
import { unitController} from '~/controllers/unitController'
const Router=express.Router()
Router.route('/')
.get((req,res)=>{
  res.status(StatusCodes.OK).json({message:'Get: API get list'})
})
.post(unitValidation.createNew,unitController.createNew)

export const unitRoute=Router