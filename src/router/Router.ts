import express from 'express';
import ProjectController from '../controller/Projects';
import TaskController from '../controller/Tasks';

const router = express.Router();

router.get('/projects', async (req, res) => {
    const controller = new ProjectController();
    let response;
    try {
        response = await controller.getProjects(req.query.projectId);
    } catch (error) {
        return res.status(400).send(error);
    }
    return res.status(200).send(response);
});

router.post('/projects', async (req, res) => {
    const controller = new ProjectController();
    let response;
    try {
        response = await controller.createProject(req.body);
    } catch (error) {
        return res.status(400).send(error);
    }
    return res.status(200).send(response);
});

router.delete('/projects/:projectId', async (req, res) =>  {
    const projectController = new ProjectController();
    const taskController = new TaskController();
    let response;
    try {
        await taskController.deleteTasksFromProject(req.params.projectId);
        response = await projectController.deleteProject(req.params.projectId);
    } catch (error) {
        return res.status(400).send(error);
    }
    return res.status(200).send(response);
})

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
