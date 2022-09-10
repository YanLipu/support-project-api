import app from './server'
import connection from '../dbconn/connection'

console.log('connection 1')
connection
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err: any) => {
    console.log('Erro ao executar o servidor', err)
  })
console.log('connection 2')

export {}
