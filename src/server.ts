import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';
import dotenv from 'dotenv';
import { connectToDatabase } from './dbConnection';
// Create an Express application
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(router);
// Middleware to handle any error
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});
// Connect to MongoDB and start the server
connectToDatabase().catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});