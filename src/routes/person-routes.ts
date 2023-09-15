
import { person_controller } from "@/controllers/person-controllers";
import { Router } from "express";

export const routes = Router();
routes.get('/person', person_controller.read);
