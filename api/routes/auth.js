import express from "express";

const router = express.Router();

router.post('/login', (req, res) => {
    const { name, password } = req.body;

    if(name && password) {
        return res.send(true);
    }

    res.status(401).send(false)
});

export default router;