import "dotenv/config";
import express from "express";

import { applyClientMiddleware } from "./server/middleware";
import router from "./server/routes";

const { PORT } = process.env;

const app = express();

// apply middlewares
applyClientMiddleware(app);

app.get("/test", (req, res) => res.send("Server is up and running"));

// Connect all our API routes
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
