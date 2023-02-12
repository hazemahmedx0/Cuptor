import * as dotenv from 'dotenv'
import mongoose from 'mongoose'

import app from './app.js'

dotenv.config()

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
)

mongoose.set('strictQuery', true)
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log('BD connection successful'))
  .catch((err) => {
    if (err.code === 8000) {
      console.log('Can not log in to database: Wrong password')
      server.close(() => {
        process.exit(1)
      })
    }
  })

const port = process.env.PORT || 3000
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`App running on port ${port}`)
})

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message)
  console.log('unhandledRejection! shuting down...')
  server.close(() => {
    process.exit(1)
  })
})
