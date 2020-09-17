import { Router, RouterContext } from "./deps.ts";
import authController from "./controllers/AuthController.ts";

const router = new Router();


router.get("/", (ctx: RouterContext) => {
    ctx.response.body = "Get Hello World";
});

router
    .post('/auth/register', authController.register)
    .post('/auth/login', authController.login)


export default router;
