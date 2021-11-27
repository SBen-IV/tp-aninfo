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

export default router;
