import express from 'express';
const router = express.Router();

router.get("/test", (req, res) => {
    return res.send({ message: "user test" });
});

export default router;