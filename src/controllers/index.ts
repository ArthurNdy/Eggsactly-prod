import express = require("express");
import { daily_controller } from "./daily-controller";

const router = express.Router();

router.get("/daily/:id", daily_controller); //get data for the daily events of a patient
router.get("/daily", daily_controller); //get data for the daily events of a patient
router.get("/", (_, response) => {
  response.json({ info: "Routing is working !" });
});

export default router;
