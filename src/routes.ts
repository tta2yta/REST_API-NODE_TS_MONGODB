import { Express, Request, Response } from "express";
import { createUserHandler } from "./controllers/user.controller";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  //Register user
  app.post("/api/usres", validateRequest(createUserSchema), createUserHandler);
}
