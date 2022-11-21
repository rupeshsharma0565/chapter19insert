import express from 'express'
import connectDb  from './db/connectdb.js'
import {createMultiDoc} from './models/student.js'

const app = express()
const port = process.env.PORT || '3000'

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"

//database connection 
connectDb(DATABASE_URL)

//create and save Document.
//  createDoc()

 createMultiDoc()

// createDoc("sumit",22,6666.66,['coding','developer'],true,[{value:'This is for testing Purpose Only .'}])

app.listen(port,()=>{
    console.log('Server Connected Successfully')
})
