import { app } from './app.js';
import connectDB from './db/index.js';
import 'dotenv/config'

connectDB()
.then(() => {
    app.on("error", (err) => {
        console.error("Error while connecting to DB !!!", err)
        throw err
    })
    
    app.listen(process.env. PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env. PORT || 8000}`);
    })
})
.catch( (err) => {
    console.log("Failed to connect with DB !!! ", err);

})
