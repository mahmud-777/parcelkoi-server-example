import mongoose from "mongoose";

export const uri = "mongodb://localhost:27017/parcelkoi";
// const options = { useUnifiedTopology: true };
const options = { };

const log = (msg) => console.log(msg);

export const connectWithDb = () => {
    mongoose.connect(uri, options, (err, db) => {
        if(err){
            // console.error(err);
            throw err;
        }
         else log("database connection established");
    })
}

// export default connectWithDb;