import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'
import 'dotenv/config'

const SECRET = process.env.JWT_SECRET ? process.env.JWT_SECRET : 'senhajwt'

/**
 *Create token for current user
 *
 * @param {*} user
 * @param {Request} req
 * @param {Response} res
 */
const createUserToken = async (user: any, req: Request, res: Response) => {
  const token = jwt.sign(
    {
      user: user.name,
      id: user.id,
    },
    SECRET
  )

  res
    .status(200)
    .send({ message: 'User authenticated.', token: token, userId: user.id })
}

export default createUserToken
