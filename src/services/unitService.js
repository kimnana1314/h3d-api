import { unitModel } from "~/models/unitModel"
const createNew=async (reqBody)=>{
  try {
       const newUnit={
        ...reqBody
       }
       const User_Id=1
       console.log('ket qua:',newUnit)
       const createUnit=await unitModel.createNew(User_Id,newUnit)
    
    return  createUnit
  }
  catch (e) { throw new Error(e)  }
}

export const unitService={
  createNew
}