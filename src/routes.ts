import { Express, Request, Response } from "express";
import { createUserHandler } from "./controllers/user.controller";
import {
  createUserSchema,
  createUserSessionSchema,
} from "./schema/user.schema";
import validateRequest from "./middleware/validateRequest";
import { createUserSessionHandler } from "./controllers/session.controller";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  //Register user
  app.post("/api/users", validateRequest(createUserSchema), createUserHandler);

  //login
  app.post(
    "api/session/",
    validateRequest(createUserSessionSchema),
    createUserSessionHandler
  );
}
