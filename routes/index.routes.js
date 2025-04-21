import { Router } from "express";
import { con1, con2, con3 } from "../controllers/index.controllers.js";

const router = Router();

router.get("/", con1 );
router.get("/ping", con2  );
router.get("/marco", con3  );


export default router;