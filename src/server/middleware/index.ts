import express, { Router } from "express";
import path from "path";

// handle client app
export const applyClientMiddleware = (app: Router) => {
  app.use("/static", express.static(path.resolve(__dirname, "public")));
};
