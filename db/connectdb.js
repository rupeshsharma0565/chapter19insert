import mongoose from "mongoose"

const connectDb = async(Database_Url) => {  
    try{
        const DB_OPTIONS = {
            dbname: 'schooldb1' ,
        }

        await mongoose.connect(Database_Url,DB_OPTIONS)
        console.log('Connected Successfully...')
    }
    catch(err){
       console.log('err')
    }

}

export default connectDb