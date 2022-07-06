const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
const routes = require('./src/queries')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.get ('/', (request, response) => {
    response.json({info: 'API REST IS RUNNING WITH SUCESS!'})
})

app.get('/task', routes.getTasks)
app.get('/task/:id', routes.getTaskById)
app.post('/task', routes.createTask)
app.put('/task/:id', routes.updateTask)
app.delete('/task/:id', routes.deleteTask)

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
})