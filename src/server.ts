import express from 'express'
import AWS from 'aws-sdk'
import routes from './routes/index'

AWS.config.update({
  region: process.env.REGION
})

const app = express()

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())
app.use('/', routes)

export default app
