import express from 'express';
import userRoutes from './routes/usersRoute.route.js'
import postLoginRoute from './routes/postLoginRoute.route.js'

const app = express();

app.use(express.json());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/auth', postLoginRoute);


export default app;
