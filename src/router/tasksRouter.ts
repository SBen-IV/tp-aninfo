import express from 'express';
import TaskController from '../controller/Tasks';

const router = express.Router();

router.get('/projects/:projectId/tasks', async (req, res) => {
    const controller = new TaskController();
    let response;
    try {
        response = await controller.getTasks(
            req.params.projectId,
            req.query.taskId
        );
    } catch (error) {
        return res.status(400).send(error);
    }
    return res.status(200).send(response);
});

router.post('/projects/:projectId/tasks', async (req, res) => {
    const controller = new TaskController();
    let response;
    try {
        response = await controller.createTask(
            req.params.projectId,
            req.body
        );
    } catch (error) {
        return res.status(400).send(error);
    }
    return res.status(200).send(response);
});

router.delete('/projects/:projectId/tasks/:taskId', async (req, res) => {
    const controller = new TaskController();
    let response;
    try {
        response = await controller.deleteTask(req.params.taskId);
    } catch (error) {
        return res.status(400).send(error);
    }
    return res.status(200).send(response);
});

router.patch('/projects/:projectId/tasks/:taskId', async (req, res) => {
    const controller = new TaskController();
    let response;
    try {
        response = await controller.updateTask(req.params.taskId, req.body);
    } catch (error) {
        return res.status(400).send(error);
    }
    return res.status(200).send(response);
});

export default router;
