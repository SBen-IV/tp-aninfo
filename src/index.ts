import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import tasksRouter from './router/tasksRouter';
import projectsRouter from './router/projectsRouter';
import recursosRouter from './router/recursosRouter';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(cors())
app.use(express.json());
app.use(tasksRouter);
app.use(projectsRouter);
app.use(recursosRouter);
app.use(express.static('public'));

app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: '/swagger.json',
        },
    })
);

(async () => {
    await mongoose.connect(process.env.DATABASE as string);
    console.log('Database');
})();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
