import express from 'express'
import cors from 'cors'
import userRoutes from './routes/UserRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/users', userRoutes)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: err.message })
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})
