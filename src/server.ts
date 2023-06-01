import app from './app'
import mongoose from 'mongoose'
import config from './config'

//database connection
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Database is connected 🛢')
    app.listen(config.port, () => {
      console.log(`Server listening on port ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
bootstrap()
