// IMPORT LIBRARY
const cors = require('cors')
const dotenv = require('dotenv')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')




// INIT
dotenv.config()
const app = express()




// MIDDLEWARE
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))




// ROUTES
const UserRoute = require('./routers/UserRoute')
const MessageRoute = require('./routers/MessageRoute')
const PekerjaanRoute = require('./routers/PekerjaanRoute')

app.use(UserRoute)
app.use(MessageRoute)
app.use(PekerjaanRoute)

app.get('/*', (req, res) => res.status(404).json({ message: 'Not Found' }));



// SERVER LISTEN
app.listen(process.env.PORT, () =>  console.log(`Server listening on ${process.env.PORT}`))