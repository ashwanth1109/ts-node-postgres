import express, { Router } from "express";

const router = Router();

// API test route
router.get("/", (req, res) => {
  res.send("API endpoints are available");
});

export default router;
