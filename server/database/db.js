import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = "mongodb+srv://vwag70612:g8Pz0EpejECWY5cx@cluster011.i5333gz.mongodb.net/?retryWrites=true&w=majority";
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;