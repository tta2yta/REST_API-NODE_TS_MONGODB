import { Express, Request, Response } from "express";
import { createUserHandler } from "./controllers/user.controller";
import { createUserSchema } from "./schema/user.schema";
import validateRequest from "./middleware/validateRequest";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  //Register user
  app.post("/api/users", validateRequest(createUserSchema), createUserHandler);
}
