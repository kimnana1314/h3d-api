import Joi from 'joi'
import { GET_DB } from '~/config/dbConnect'
import sql  from 'mssql'
 const columnModel =Joi.object({
  UnitName:Joi.string().min(1).max(30).trim().strict(),
  Status:Joi.boolean().default(true)
})
 const createNew =async(UserId,data)=>{
try {
  const createUnit=await GET_DB().request()
      .input('UserId', sql.Int, UserId)
      .input('Json', sql.NText, JSON.stringify(data))
      .output('Mes', sql.NVarChar(200))
      .execute('spUnitInsert')
     return JSON.parse(createUnit.output.Mes) //.recordsets[0] 
}
catch (e) {throw new Error(e)}
}
export const unitModel={
  createNew
}