import { StatusCodes } from 'http-status-codes'
const createNew=async (req,res,next)=>{
  try {
    console.log('req.body',req.body)
    console.log('req.query',req.query)
    console.log('req.params',req.params)
    console.log('req.files',req.files)
    console.log('req.cookies',req.cookies)
    console.log('req.jwtDecoded',req.jwtDecoded)
    // throw new ApiError(StatusCodes.ACCEPTED, 'Loi thu');
    
     res.status(StatusCodes.CREATED).json({message:'Post: API create new list'})
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