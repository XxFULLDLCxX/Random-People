import express, { json } from 'express';
import { routes } from './routes/person-routes';

const app = express();

app.use(json());
app.use(routes);

const port = Number(process.env.PORT) || 5000;

app.listen(5000, () => console.log(`Server is listen on port ${port}...`));
