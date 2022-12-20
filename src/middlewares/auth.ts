import { Request, Response, NextFunction } from 'express'

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
  public checkIfUserIsLogged (req: Request, res: Response, next: NextFunction) {
    console.log('req', req.headers)
    console.log('teste')
    next()
  }
}

