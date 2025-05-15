import "dotenv/config";
import express from "express";
import indexRoutes from "./routes/index.routes.js";
import UserRoutes from "./routes/users.routes.js"
import morgan from "morgan";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(indexRoutes);
app.use(UserRoutes);
const port = 5001;

app.listen(port, console.log("http://localhost:"+port));