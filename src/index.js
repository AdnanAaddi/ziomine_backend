import dotenv from "dotenv"
import connectDB from "./db/index.js"
import app from "./app.js";
import logger from "./middlewares/logger.js";
import userRoutes from "./routes/user.routes.js"
dotenv.config()
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
        
    })
})
.catch((error)=>{
    console.log("MONGO DB connection failed !!!", error);
})


/*
function connectDB(){

}
(async()=>{
    try {
        await mongoose.connect(`${process.env.
            MONGODB_URI}/${DB_NAME}`)
            app.on("error", (error)=>{
                console.log("ERROR", error)
                throw error
            })
            app.listen(process.env.PORT, ()=>{
                console.log(`App is listening on the port
                    ${process.env.PORT}`);
            })


    } catch (error) {
        console.error("ERROR", error)
        throw error
    }
})()
*/