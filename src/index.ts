import express from 'express'
import databaseService from './services/database.services'
import usersRouter from './routes/users.routes'
import mediasRouter from './routes/medias.routes'
import { defaultErrorHandler } from './middlewares/error.middlewares'
import { initFolder } from './utils/file'
import { config } from 'dotenv'
import { UPLOAD_DIR } from './constants/dir'
config()

databaseService.connect()
const app = express()
const port = process.env.PORT || 4000
// Tạo folder upload
initFolder()

app.use(express.json())
app.use('/users', usersRouter)
app.use('/medias', mediasRouter)

app.use('/static', express.static(UPLOAD_DIR))

app.use(defaultErrorHandler)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
