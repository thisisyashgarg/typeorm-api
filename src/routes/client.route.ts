import { Router, Request, Response } from "express";

const router = Router();

router.post("/client/create", (req: Request, res: Response) => {
  res.status(200).send("Client created");
});

export { router as ClientRouter };
