import "dotenv/config";
import express from "express";
import indexRoutes from "./routes/index.routes.js";
import UserRoutes from "./routes/users.routes.js"


const app = express();
app.use(express.json());
app.use(indexRoutes);
app.use(UserRoutes);
const port = 5001;

app.listen(port, console.log("http://localhost:"+port));