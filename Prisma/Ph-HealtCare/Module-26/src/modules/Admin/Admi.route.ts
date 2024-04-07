import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import { AdminController } from "./Admin.controller";

const router = express.Router();

router.get("/get-admin", AdminController.getAdminController);

export const AdminRoute = router;
