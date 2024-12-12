import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'
const createNew=async (req,res,next)=>{
  const correctConditinon= Joi.object({
    UnitName:Joi.string().required().min(1).max(30).trim().strict().messages({
      'any.required':'Phải nhập dữ liệu',
      'string.empty':'Dữ liệu không được để trống',
      'string.min':'Độ dài tối thiếu là 1 ký tự',
      'string.max':'Độ dài tối đa là 30 ký tự',
      'string.trim':'Không được có khoảng trống ở đầu và cuối',
    }),
    Status:Joi.boolean().required()
   
  })
  try{
    await correctConditinon.validateAsync(req.body,{abortEarly:false})
    next()
  } catch (e) {
    next( new ApiError(StatusCodes.UNPROCESSABLE_ENTITY,new Error(e).message))
  }
}

export const unitValidation={
  createNew
}