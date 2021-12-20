import express from 'express';
import RecursosController from '../controller/Recursos';
const router = express.Router();

router.get('/recursos', async (_req, res) => {
    const controller = new RecursosController();
    let response;
    try {
        response = await controller.getUsers();
    } catch (error) {
        return res.status(400).send(error);
    }
    return res.status(200).send(response);
});

export default router;