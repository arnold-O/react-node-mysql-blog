const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./models')


// Routers
const PostRoute = require('./routes/postRoute')


app.use(express.json());
app.use(cors())







// endpoints
app.use('/post/v1', PostRoute)







db.sequelize.sync().then(()=>{
const port = 5000
app.listen(port, ()=>{
    console.log(`port running on ${port}`)
})
})