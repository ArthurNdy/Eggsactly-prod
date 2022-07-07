// const { customer_notifications_endpoint } = require('../../../services/internal/endpoints');
// const { customer_notifications_treatment } = require('../../../services/internal/treatments');
import { Request, Response } from "express";
import { get_daily } from "../db/daily";

export async function daily_controller(req: Request, res: Response) {
  try {
    const data = await get_daily(parseInt(req.params.id));
    res.send(data[0]);
  } catch (err) {
    res.status(500).send("Internal server error");
    console.log(`(daily_controller) Error: ${err}`);
    console.error(err);
  }
}
