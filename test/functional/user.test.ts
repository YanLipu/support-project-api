import supertest from 'supertest'
import app from '../../src/server'
import connection from '../../dbconn/connection'

describe('User register test', () => {
  beforeAll(async () => {
    await connection.sync()
  })
  it('should return success', async () => {
    const { body, status } = await supertest(app).get('/users')
    console.log('status', status)
    expect(status).toBe(200)
    expect(body).toStrictEqual({ message: 'Success!' })
  })

  it('creating user', async () => {
    const user = {
      name: 'José Yan Lipu',
      type: 1,
      fantasy_name: '',
      cnpj_cpf: '123.123.123-12',
      email: 'jose@teste.com',
      phone: '67999170828',
      address: 'Rua dos Bobos',
      password: 'senha123',
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
      account_verified: false,
    }
    const response = await supertest(app).post('/users/register').send(user)
    console.log('response', response.status)
    expect(response.status).toBe(200)
  })

  afterAll(async () => {
    await connection.close()
  })
})
