
const express = require('express')
const mongoose = require('mongoose')
const formationRoute = require('./routes/formation')
const contactRoute = require('./routes/contact')
const langueRoute = require('./routes/langue')
const experienceRoute = require('./routes/experience')
const loisirRoute = require('./routes/loisir')
const competenceRoute = require('./routes/competence')
const userRoute = require('./routes/user')
const cors = require('cors')
require('dotenv').config()
const URL_MONGODB = process.env.URL_MONGODB
const cookieParser = require('cookie-parser');

mongoose.connect(URL_MONGODB)
    .then(() => {
        console.log('App coonnected to database')
        app.listen(process.env.PORT, () => {
            console.log(`server is running on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })


const app = express()
app.use(express.json())
app.use(cors({ credentials: true, origin: "http://localhost:3000" }))
app.use(cookieParser())



// app.use('', contactRoute)
app.use('', formationRoute)
app.use('', contactRoute)
app.use('', langueRoute)
app.use('', experienceRoute)
app.use('', loisirRoute)
app.use('', competenceRoute)
app.use('', userRoute)




