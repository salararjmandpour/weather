import express from "express";
import bodyParser from "body-parser";
import { setupSwagger } from "./swagger/swagger.config";
import weatherRoutes from "./routes/weather.routes";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();

app.use(express.json());


setupSwagger(app);

app.use(errorHandler);
app.use("/", weatherRoutes);

export default app;
