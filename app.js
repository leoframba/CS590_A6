import express from 'express';
import routes from './routes/routes.js';
import {urlencoded} from "express";

const app = express();
const PORT = 3000;
const HOST = "0.0.0.0";

app.use(express.json());
app.use(express.urlencoded({extended: true}));

routes(app);

app.listen(PORT, HOST, () => console.log(`Server started on http://${HOST}:${PORT}`));