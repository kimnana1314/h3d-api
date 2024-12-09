import { StatusCodes } from 'http-status-codes'
import { lisstService } from '~/services/lisstService'
import { GET_DB } from '~/config/dbConnect'
const createNew=async (req,res,next)=>{
  try {
    console.log('req.body',req.body)
    console.log('req.query',req.query)
    console.log('req.params',req.params)
    console.log('req.files',req.files)
    console.log('req.cookies',req.cookies)
    console.log('req.jwtDecoded',req.jwtDecoded)
    const createdList=await lisstService.createNew(req.body)    
    console.log(GET_DB())
     res.status(StatusCodes.CREATED).json(createdList)
  }
  catch (e) {
    next(e)
  //   res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
  //     errors: new Error(e).message
  // })

  }
}

export const listController={
  createNew
}