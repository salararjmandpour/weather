export const weatherDocs = {
    "/weather": {
      get: {
        tags: ["Weather"],
        summary: "Get all weather data",
        description: "Retrieve all weather data from the database.",
        responses: {
          200: {
            description: "List of weather data.",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Weather",
                  },
                },
              },
            },
          },
          404: {
            description: "No weather data found.",
          },
          500: {
            description: "Internal server error.",
          },
        },
      },
      post: {
        tags: ["Weather"],
        summary: "Fetch and save weather data",
        description: "Fetch weather data for a specific city and save it.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  cityName: {
                    type: "string",
                    example: "London",
                  },
                  country: {
                    type: "string",
                    example: "UK",
                  },
                },
                required: ["cityName", "country"],
              },
            },
          },
        },
        responses: {
          200: {
            description: "Weather data fetched and saved successfully.",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Weather",
                },
              },
            },
          },
          500: {
            description: "Failed to fetch weather data.",
          },
        },
      },
    },
    "/weather/{id}": {
      get: {
        tags: ["Weather"],
        summary: "Get weather data by ID",
        description: "Retrieve weather data by its unique ID.",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID of the weather data",
            schema: {
              type: "integer",
              example: 1,
            },
          },
        ],
        responses: {
          200: {
            description: "Weather data retrieved successfully.",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Weather",
                },
              },
            },
          },
          404: {
            description: "Weather data not found.",
          },
          500: {
            description: "Internal server error.",
          },
        },
      },
      put: {
        tags: ["Weather"],
        summary: "Update weather data",
        description: "Update weather data by its unique ID.",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID of the weather data to update",
            schema: {
              type: "integer",
              example: 1,
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  cityName: { type: "string", example: "London" },
                  country: { type: "string", example: "UK" },
                  temperature: { type: "float", example: 20.5 },
                  description: { type: "string", example: "Clear sky" },
                  humidity: { type: "float", example: 50 },
                  windSpeed: { type: "float", example: 10.5 },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Weather data updated successfully.",
          },
          404: {
            description: "Weather data not found.",
          },
          500: {
            description: "Internal server error.",
          },
        },
      },
      delete: {
        tags: ["Weather"],
        summary: "Delete weather data",
        description: "Delete a weather data entry by its unique ID.",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID of the weather data to delete",
            schema: {
              type: "integer",
              example: 1,
            },
          },
        ],
        responses: {
          200: {
            description: "Weather data deleted successfully.",
          },
          404: {
            description: "Weather data not found.",
          },
          500: {
            description: "Internal server error.",
          },
        },
      },
    },
    "/weather/latest/{cityName}": {
      get: {
        tags: ["Weather"],
        summary: "Get latest weather data by city name",
        description: "Retrieve the latest weather data for a specific city.",
        parameters: [
          {
            name: "cityName",
            in: "path",
            required: true,
            description: "Name of the city",
            schema: {
              type: "string",
              example: "London",
            },
          },
        ],
        responses: {
          200: {
            description: "Latest weather data retrieved successfully.",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Weather",
                },
              },
            },
          },
          404: {
            description: "No weather data found for this city.",
          },
          500: {
            description: "Internal server error.",
          },
        },
      },
    },
  };
  
  export const weatherSchema = {
    Weather: {
      type: "object",
      properties: {
        id: { type: "integer", example: 1 },
        cityName: { type: "string", example: "London" },
        country: { type: "string", example: "UK" },
        temperature: { type: "float", example: 20.5 },
        description: { type: "string", example: "Clear sky" },
        humidity: { type: "float", example: 50 },
        windSpeed: { type: "float", example: 10.5 },
        createdAt: { type: "string", example: "2025-01-01T12:00:00Z" },
        updatedAt: { type: "string", example: "2025-01-02T12:00:00Z" },
      },
    },
  };
  