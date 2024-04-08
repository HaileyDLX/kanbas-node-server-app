import express from 'express';
import Hello from './hello.js';
import Lab5 from './Lab5.js';
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/assignments/routes.js";
import mongoose from 'mongoose';
import UserRoutes from "./kanbas-node-server-app/Users/routes.js";

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express();
app.use(cors());
app.use(express.json());

ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);

Lab5(app);
Hello(app);
UserRoutes(app);
app.listen( process.env.PORT || 4000);