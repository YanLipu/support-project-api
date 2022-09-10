import { Request } from 'express'
const getToken = async (req: Request) => {
  const authHeader = req.headers.authorization
  const token = authHeader?.replace('Bearer ', '')
  return token
}

export default getToken
