require("express-async-errors");
const express = require("express");
const migrationsRun = require("./database/sqlite/migrations");
const routes = require("./routes");
const AppError = require("./utils/AppError");

migrationsRun();

const app = express();
app.use(express.json());
app.use(routes);

app.use((error, request, response, next) => {
  if( error instanceof AppError ) {
    return response.status(error.statusCode).json({
      message: error.message,
      status: error.statusCode
    });
  };

  console.error(error);

  return response.status(500).json({
    message: "error",
    status: "Internal Server Error"
  });
});

const PORT = 5501;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});