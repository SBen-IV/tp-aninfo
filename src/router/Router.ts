import express from 'express';
import ProjectController from '../controller/Projects';
import TaskController from '../controller/Tasks';

const router = express.Router();

router.get('/projects', async (_req, res) => {
    const controller = new ProjectController();
    let response;
    try {
        response = await controller.getProjects();
    } catch (error) {
        return res.status(400).send(error);
    }
    return res.status(200).send(response);
});

router.post('/projects', async (_req, res) => {
    const controller = new ProjectController();
    let response;
    try {
        response = await controller.createProject(_req.body);
    } catch (error) {
        return res.status(400).send(error);
    }
    return res.status(200).send(response);
});

router.get('/projects/:projectId/tasks', async (_req, res) => {
    const controller = new TaskController();
    let response;
    try {
        response = await controller.getTasks(_req.params.projectId);
    } catch (error) {
        return res.status(400).send(error);
    }
    return res.status(200).send(response);
});

router.post('/projects/:projectId/tasks', async (_req, res) => {
    const controller = new TaskController();
    let response;
    try {
        response = await controller.createTask(
            _req.params.projectId,
            _req.body
        );
    } catch (error) {
        return res.status(400).send(error);
    }
    return res.status(200).send(response);
});

export default router;
