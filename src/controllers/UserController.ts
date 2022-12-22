import { Request, Response } from 'express'
import createUserToken from '../helpers/create-jwt'
import { prismaClient } from '../database/connection'
import bcrypt from 'bcrypt'

/**
 * Class with methods for User
 *
 * @export
 * @class UserController
 */
export default class UserController {

  /**
	 *Method with user registration
	 *
	 * @param {Request} req
	 * @param {Response} res
	 * @return {*}  {Promise<void>}
	 * @memberof UserController
	 */
  public async userRegister (req: Request, res: Response): Promise<void> {
    try {
      const {
        name,
        type,
        fantasy_name,
        cnpj_cpf,
        email,
        phone,
        address,
        password,
        access_type,
        state,
        city,
        district,
        address_number,
        complement,
        pix_key,
        photo_path,
        description,
        account_confirmed,
        account_verified
      } = req.body
      if (!name) {
        res.status(422).send({ message: 'Nome is required!' })
        return
      }
      if (!type) {
        res.status(422).send({ message: 'Tipo is required!' })
        return
      }
      if (!cnpj_cpf) {
        res.status(422).send({ message: 'CNPJ or CPF is required!' })
        return
      }
      if (!email) {
        res.status(422).send({ message: 'Email is required!' })
        return
      }
      if (!address) {
        res.status(422).send({ message: 'Address is required!' })
        return
      }
      if (!password) {
        res.status(422).send({ message: 'Password is required!' })
        return
      }

      const verifyUserExist = await prismaClient.user.findFirst({
        where: {
          email: email
        }
      })

      if (verifyUserExist) {
        res.status(409).send({ message: 'This user already exist.' })
        return
      }

      const salt = await bcrypt.genSalt(12)
      const pwhash = await bcrypt.hash(password, salt)

      const newUser = await prismaClient.user.create({
        data: {
          name: name,
          type: type,
          password: pwhash,
          fantasy_name: fantasy_name || null,
          cnpj_cpf: cnpj_cpf,
          email: email,
          phone: phone || null,
          access_type: access_type,
          address: address,
          state: state,
          city: city,
          district: district,
          address_number: address_number,
          complement: complement,
          pix_key: pix_key || null,
          photo_path: photo_path,
          description: description,
          account_confirmed: account_confirmed,
          account_verified: account_verified
        }
      })
      const { token, userId } = await createUserToken(newUser, req, res)
      res.status(200).send({ message: 'success', token, userId })
    } catch (error: any) {
      res.status(500).send({ message: 'Error!', error: error.message })
    }
  }

  /**
	 * User login
	 *
	 * @param {Request} req
	 * @param {Response} res
	 * @return {*}  {Promise<void>}
	 * @memberof UserController
	 */
  public async login (req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body
      const verifyUserExist = await prismaClient.user.findFirst({
        where: {
          email: email
        }
      })
      if (!verifyUserExist) {
        res.status(422).send({ message: 'This user already exist.' })
        return
      }

      const checkPassword = await bcrypt.compare(password, verifyUserExist.password)
      if (!checkPassword) {
        res.status(422).send({ message: 'Password not valid.' })
        return
      }
      const { token, userId } = await createUserToken(verifyUserExist, req, res)
      res.status(200).send({ message: 'user logged', token, userId })
    } catch (error) {
      res.status(500).send({ message: 'Internal server error' })
    }
  }

  /**
	 *Method for controller health check
	 *
	 * @param {Request} req
	 * @param {Response} res
	 * @return {*}  {Promise<void>}
	 * @memberof UserController
	 */
  public async testRoute (req: Request, res: Response): Promise<void> {
    try {
      res.status(200).send({ message: 'Success!' })
    } catch (error) {
      res.status(500).send('Error!')
    }
  }
}
