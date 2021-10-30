import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// Step 2 ------------>>>>>>>> Routing
import Routes from './server/route.js';

const app = express(); 

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Step 2 ------------------->

app.use('/users', Routes);

dotenv.config({ path: 'config.env' });

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
  );
  
const PORT = process.env.PORT || '8080'; //2 - get the port from env file, if not available pick 8080

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(() => {  
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})

