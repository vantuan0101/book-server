const express = require("express");
const { sequelize } = require("./models");
const { rootRouter } = require("./routes");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const xss = require("xss-clean");
const hpp = require("hpp");
const helmet = require("helmet");
const dotenv = require("dotenv");
const path = require("path");
// eslint-disable-next-line import/newline-after-import
const cors = require("cors");
const app = express();
app.enable("trust proxy"); // trust first proxy
dotenv.config({ path: "./config.env" });

// parse application/x-www-form-urlencoded
app.use(express.json({ limit: "10kb" }));
// parse application/json
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Implement CORS
// eslint-disable-next-line prettier/prettier
app.use(cors({ credentials: true, origin: true })); 
app.use(cookieParser());

app.use(
  compression({
    level: 6,
    // threshold : 10 * 1000
  })
);
// Set security HTTP headers
app.use(helmet({ crossOriginResourcePolicy: false }));

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      "duration",
      "ratingsQuantity",
      "ratingsAverage",
      "maxGroupSize",
      "difficulty",
      "price",
    ],
  })
);
// Serving static files
const publicDir = path.join(__dirname, "./public");
app.use("/public", express.static(publicDir));
app.use("/api/v1/", rootRouter);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(`Server is running on port http://localhost:${port}`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});