import { Request, Response, NextFunction } from 'express'
import  TokenValidation from '../helpers/get-token'

/**
 *Middleware class for check user permission
 *
 * @export
 * @class Authentication
 */
export default class Authentication {

  /**
	 * Function to check if user is logged
	 *
	 * @param {Request} req
	 * @param {Response} res
	 * @param {NextFunction} next
	 * @memberof Authentication
	 */
  public async checkIfUserIsLogged (req: Request, res: Response, next: NextFunction) {
    const tokenValidation = new TokenValidation(req)
    console.log('tokenValidation', tokenValidation)
    const token = await tokenValidation.getToken()
    console.log('token', token)
    if (token) {
      const checkIfTokenIsValid = tokenValidation.checkIfTokenIsValid(token)
      if (checkIfTokenIsValid) {
        next()
      } else {
        res.status(498).send({ message: 'Invalid Token' })
      }
    } else {
      res.status(401).send({ message: 'Unauthorized' })
    }
  }
}

