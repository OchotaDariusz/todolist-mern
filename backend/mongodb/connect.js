import mongoose from "mongoose"

const connectDB = url => {
    mongoose.set('strictQuery', true)
    mongoose.connect(url)
        .then(() => console.log('Connected to database.'))
        .catch(err => {
            console.error('Failed to connect to database.')
            console.error(err.message)
        })
}

export default connectDB