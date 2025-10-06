import { Router } from "express";
import { userController } from "./user.controller.js";
const router = Router();
router.get('/all-users', userController.getUsers);
router.post('/create-user', userController.createUser);
export const userRoute = router;
//# sourceMappingURL=user.route.js.map