import supertest from 'supertest'
import app from '../../src/server'
import { faker } from '@faker-js/faker'

const EMAIL = faker.internet.email()
let TOKEN: string
const PW = 'senha123'

describe('User register test', () => {
  it('creating user', async () => {		
    const user = {
      name: 'José Yan Lipu',
      type: 1,
      fantasy_name: '',
      cnpj_cpf: faker.random.numeric(11),
      email: EMAIL,
      phone: '67999170828',
      address: 'Rua dos Bobos',
      password: PW,
      access_type: 1,
      state: 'MS',
      city: 'Aquidauana',
      district: 'Taunay',
      address_number: '800',
      complement: 'Casa',
      pix_key: 'jose@gmail.com',
      photo_path: 'rota/aqui',
      description: 'Me chamo José Yan ',
      account_confirmed: false,
      account_verified: false
    }
    const response = await supertest(app).post('/users/register').send(user)
    const data = JSON.parse(response.text)
    TOKEN = data.token
    expect(response.status).toBe(200)		
  })

  it('should not be able to create an existing user', async ()=>{
    const user = {
      name: 'José Yan Lipu',
      type: 1,
      fantasy_name: '',
      cnpj_cpf: faker.random.numeric(11),
      email: EMAIL,
      phone: '67999170828',
      address: 'Rua dos Bobos',
      password: PW,
      access_type: 1,
      state: 'MS',
      city: 'Aquidauana',
      district: 'Taunay',
      address_number: '800',
      complement: 'Casa',
      pix_key: 'jose@gmail.com',
      photo_path: 'rota/aqui',
      description: 'Me chamo José Yan ',
      account_confirmed: false,
      account_verified: false
    }
    const response = await supertest(app).post('/users/register').send(user)
    expect(response.status).toBe(409)
  })
})

describe('Login test suit', ()=>{
  it('user login', async ()=>{
    const login = {
      email: EMAIL,
      password: PW
    }
    const response = await supertest(app).post('/users/login').send(login)
    TOKEN = response.body.token as string
    expect(response.status).toBe(200)
  })

  it('should be access protected route', async ()=>{
    const response = await supertest(app).get('/users').set('Authorization', TOKEN)
    expect(response.status).toBe(200)
  })
})
