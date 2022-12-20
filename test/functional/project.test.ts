import supertest from 'supertest'
import app from '../../src/server'

describe('Projects test', ()=>{
  it('List all projects', async ()=>{
    const response = await supertest(app)
      .get('/projects/list')
    expect(response.status).toBe(200)
  })
})