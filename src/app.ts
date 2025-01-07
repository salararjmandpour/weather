import express from "express";
import cors from "cors";
import { setupSwagger } from "./swagger/swagger.config";
import weatherRoutes from "./routes/weather.routes";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();
app.use(cors());
app.use(express.json());


setupSwagger(app);

app.use(errorHandler);
app.use("/", weatherRoutes);

export default app;
