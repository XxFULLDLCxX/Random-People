import { person_service } from "@/services/person-services";
import { Request, Response } from "express";


const read = async (req: Request, res: Response) => {
  const result = await person_service.read();
  res.send(result);
};

export const person_controller = {
  read,
};
