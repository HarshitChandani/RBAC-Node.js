import * as express from "express";
import { Application } from "express";
import TaskRoutes from "./routes/TaskRoutes";

const app:Application= express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/',TaskRoutes);

