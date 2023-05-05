import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  res.send('Yo yo Docker! 🐳 This is amazing!')
})

app.get('/test', (req, res) => {
  res.send("This is a test.")
})

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000...')
})
