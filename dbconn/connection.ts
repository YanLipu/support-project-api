import { Dialect, Sequelize } from "sequelize";
import 'dotenv/config'

const db_apoio = process.env.POSTGRES_DB as string
const user = process.env.POSTGRES_USER as string
const password = process.env.POSTGRES_PASSWORD as string
const host = process.env.POSTGRES_HOST as string
const dialect = process.env.DB_DIALECT as Dialect

const sequelize = new Sequelize(db_apoio, user, password, {
  host: host,
  dialect: dialect
});

(async () => {
  try {
    await sequelize.authenticate()
    console.log('Banco de dados conectado')
  } catch (error) {
    console.log('Não foi possível conectar ao banco de dados', error)
  }
})();

export default sequelize