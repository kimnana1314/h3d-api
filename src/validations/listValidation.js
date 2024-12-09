import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'
const createNew=async (req,res,next)=>{
  const correctConditinon= Joi.object({
    title:Joi.string().required().min(3).max(50).trim().strict().messages({
      'any.required':'Phải nhập dữ liệu',
      'string.empty':'Dữ liệu không được để trống',
      'string.min':'Độ dài tối thiếu là 3 ký tự',
      'string.max':'Độ dài tối đa là 50 ký tự',
      'string.trim':'Không được có khoảng trống ở đầu và cuối',
    }),
    description:Joi.string().required().min(3).max(250).trim().strict()
   
  })
  try{
    await correctConditinon.validateAsync(req.body,{abortEarly:false})
    next()
  } catch (e) {
    next( new ApiError(StatusCodes.UNPROCESSABLE_ENTITY,new Error(e).message))
  }
}

export const listValidation={
  createNew
}