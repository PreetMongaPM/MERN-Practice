import express from 'express';
import userRoutes from './routes/usersRoute.route.js'
import postLoginRoute from './routes/postLoginRoute.route.js'
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(express.json());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/auth', postLoginRoute);
app.use(errorHandler);


export default app;
