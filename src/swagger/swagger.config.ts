import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import { weatherDocs, weatherSchema } from "./swagger.weather";  // وارد کردن weatherDocs

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
        url: "http://localhost:3000",
      },
    ],
    components: {
      schemas: weatherSchema,  // اضافه کردن schemas شما
    },
  },
  // استفاده از weatherDocs به‌عنوان بخش تنظیمات مستندات API
  apis: [], // می‌توانیم اینجا خالی بگذاریم زیرا از weatherDocs استفاده می‌کنیم
};

// اضافه کردن weatherDocs به swaggerSpec
const swaggerSpec = {
  ...swaggerJsDoc(options),  // اضافه کردن تنظیمات اولیه
  paths: weatherDocs,        // استفاده از weatherDocs برای تعریف مسیرهای API
};

export function setupSwagger(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
