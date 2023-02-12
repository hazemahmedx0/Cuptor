import * as dotenv from 'dotenv'

import app from './app.js'

dotenv.config()

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
