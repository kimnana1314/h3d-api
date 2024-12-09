import { slugify } from "~/utils/formatters"

const createNew=async (reqBody)=>{
  try {
       const newList={
        ...reqBody,
        slug: slugify(reqBody.title)
       }
    return newList
  }
  catch (e) { throw e  }
}

export const lisstService={
  createNew
}