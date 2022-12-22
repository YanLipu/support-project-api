import jwt from 'jsonwebtoken'
import { Request } from 'express'

export default class TokenValidation {
  request: Request

  constructor (req: Request) {
    this.request = req
  }

  public async getToken (): Promise<string> {
    if (this.request.headers.authorization) {
      const authHeader = this.request.headers.authorization
      const token = authHeader?.replace('Bearer ', '')
      return token
    } else {
      return ''
    }
  }

  public checkIfTokenIsValid (token: string): boolean {
    const decodedToken = jwt.decode(token)
    return !!decodedToken
  }
}
