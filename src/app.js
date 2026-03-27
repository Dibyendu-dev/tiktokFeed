// src/app.js
import express from "express";
import videoRoutes from "./routes/video.route.js";

const app = express();



app.use(express.json());
app.use("/api", videoRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});