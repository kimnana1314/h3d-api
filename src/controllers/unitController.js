import { StatusCodes } from 'http-status-codes'
import { unitService } from '~/services/unitService'
import { GET_DB } from '~/config/dbConnect'
const createNew=async (req,res,next)=>{
  try {
    // console.log('req.body',req.body)
    // console.log('req.query',req.query)
    // console.log('req.params',req.params)
    // console.log('req.files',req.files)
    // console.log('req.cookies',req.cookies)
    // console.log('req.jwtDecoded',req.jwtDecoded)
    const createdUnit=await unitService.createNew(req.body)    

     res.status(StatusCodes.CREATED).json(createdUnit)
  }
  catch (e) {
    next(e)
  //   res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
  //     errors: new Error(e).message
  // })

  }
}

export const unitController={
  createNew
}