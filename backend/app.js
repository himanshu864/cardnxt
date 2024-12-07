require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT;

// Connect to MongoDB
const uri = process.env.URI;
const connectMongoDB = require("./config/connect.js");
connectMongoDB(uri);

const path = require("path");

// Serve React static files
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Fallback for React Router (if you have dynamic routes in React)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Allow all requests from React Server to avoid CORS errors
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credential: true,
};
app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // Frontend origin
  res.header("Access-Control-Allow-Credentials", "true"); // Explicitly allow credentials
  next();
});

const adminRouter = require("./routers/admin.js");
app.use("/admin", adminRouter);

// Global Error Handler
app.use((err, req, res, next) => res.status(500).json({ error: err.message }));

app.listen(PORT, () => {
  console.log(`server running successfully on PORT: ${PORT}`);
});
