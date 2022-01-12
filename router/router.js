import Router from "express";
import userCntrl from "../controllers/user-controller.js";

const router = new Router();

router.get("/tickets", userCntrl.getTickets);

router.post("/tickets", userCntrl.createTicket);
router.post("/user", userCntrl.createUser);
router.get("/user", userCntrl.getAllUsers);

export default router;
