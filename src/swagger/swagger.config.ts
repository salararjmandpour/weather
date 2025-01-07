import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import { weatherDocs, weatherSchema } from "./swagger.weather";  
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Weather API",
      version: "1.0.0",
      description: "API documentation for the Weather API",
    },
    servers: [
      {
        url: "https://weather2025.liara.run/",
      },
    ],
    components: {
      schemas: weatherSchema,
    },
  },
  apis: [], 
};

const swaggerSpec = {
  ...swaggerJsDoc(options),
  paths: weatherDocs,       
};

export function setupSwagger(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
