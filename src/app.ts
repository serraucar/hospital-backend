import express from 'express';
import doctorsRouter from './routes/doctors'; 
import patientsRouter from './routes/patients'; 
import sequelize from './database'; 

const app = express();
app.use(express.json()); 


app.use('/doctors', doctorsRouter);
app.use('/patients', patientsRouter);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
    console.log(`Server is running on port ${port}.`);
    try {
        await sequelize.authenticate(); 
        console.log('Database successfully connected.');
    } catch (error) {
        console.error('Failed to connect to the database:', error);
    }
});
