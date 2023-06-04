import app from './app'
import mongoose from 'mongoose'
import config from './config'
import { logger, errorLogger } from './shared/logger'

//database connection
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database is connected 🛢')
    app.listen(config.port, () => {
      logger.info(`Server listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error(error)
  }
}
bootstrap()
