/* eslint-disable no-console */
import app from './app'
import mongoose from 'mongoose'
import config from './config'

// getting-started.js

async function server() {
  try {
    await mongoose.connect(config.database_url_local)
    app.listen(process.env.PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

server().catch((err) => console.log(err))
