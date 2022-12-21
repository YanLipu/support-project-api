import supertest from 'supertest'
import app from '../../src/server'

let TOKEN: string
describe('Projects test suit', ()=>{
  it('List all projects', async ()=>{
    const response = await supertest(app)
      .get('/projects/list')
    expect(response.status).toBe(200)
  })

  it('Should be logged for create a new project', async ()=>{
    const user = {
      email: 'Janie.Medhurst@yahoo.com',
      password: 'senha123'
    }
    const response = await supertest(app).post('/users/login').send(user)
    TOKEN = response.body.token as string
    expect(response.status).toBe(200)
  })

  it('Creating a new project', async () => {
    const project = {
      name: 'Teste projeto novo',
      description: 'Teste do novo projeto',
      goal: '10000',
      amount_raised: '0',
      monthly_cost: '0',
      verified: false,
      sponsors: 10,
      type: '1',
      photos_path: 'not',
      videos_path: 'not'
    }
    const response = await supertest(app).post('/projects/new').set('Authorization', TOKEN).send(project)
    expect(response.status).toBe(200)
  })
})