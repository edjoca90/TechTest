const swaggerOutput = {
  host: "localhost:3000",
  basePath: "/",
  tags: [
    {
      name: "Auth",
      description: "Endpoints de Autenticación",
    },
    {
      name: "Health",
      description: "Monitoreo del servidor",
    },
  ],
  schemes: ["http"],
  paths: {
    "/api/auth/register": {
      post: {
        description: "",
        parameters: [
          {
            name: "body",
            in: "body",
            schema: {
              type: "object",
              properties: {
                name: {
                  example: "any",
                },
                email: {
                  example: "any",
                },
                password: {
                  example: "any",
                },
              },
            },
          },
        ],
        responses: {
          "201": {
            description: "Created",
          },
          "400": {
            description: "Bad Request",
          },
          "500": {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/api/auth/login": {
      post: {
        description: "",
        parameters: [
          {
            name: "body",
            in: "body",
            schema: {
              type: "object",
              properties: {
                email: {
                  example: "any",
                },
                password: {
                  example: "any",
                },
              },
            },
          },
        ],
        responses: {
          "200": {
            description: "OK",
          },
          "400": {
            description: "Bad Request",
          },
          "500": {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/api/health/": {
      get: {
        description: "",
        responses: {
          "200": {
            description: "OK",
          },
          "500": {
            description: "Internal Server Error",
          },
        },
      },
    },
  },
};

export default swaggerOutput;
