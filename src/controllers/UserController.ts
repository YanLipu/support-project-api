import { Request, Response } from 'express'
import createUserToken from '../helpers/create-jwt'
import { Prisma } from '@prisma/client'
import { prismaClient } from '../../dbconn/connection'
import getToken from '../helpers/get-token'
import bcrypt from 'bcrypt'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { request } from 'http'

const SECRET = process.env.JWT_SECRET ? process.env.JWT_SECRET : 'senhajwt'

export default class UserController {
  //private checkRequiredInformation(req: Request): Promise<void> {

  //}
  public async userRegister(req: Request, res: Response): Promise<void> {
    try {
      console.log('userRegister')
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
        account_verified,
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
          email: email,
        },
      })
      console.log('verifyUserExist', verifyUserExist)

      if (verifyUserExist) {
        res.status(409).send({ message: 'This user already exist.' })
        return
      }

      const salt = await bcrypt.genSalt(12)
      console.log('salt', salt)
      const pwhash = await bcrypt.hash(password, salt)
      console.log('pwhash', pwhash)

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
          account_verified: account_verified,
        },
      })
      await prismaClient.$disconnect()
      console.log('newUser', newUser)
      const { token, userId } = await createUserToken(newUser.id, req, res)
      res.status(200).send({ token, userId })
    } catch (error) {
      res.status(500).send({ message: 'Error!', error: error })
    }
  }

  public async testRoute(req: Request, res: Response): Promise<void> {
    try {
      console.log('bateu aqui')
      res.status(200).send({ message: 'Success!' })
    } catch (error) {
      res.status(500).send('Error!')
    }
  }
}
