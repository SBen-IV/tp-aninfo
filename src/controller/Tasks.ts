import { Get, Post, Body, Path, Route } from 'tsoa';
import TaskSchema from '../schema/tasks';

enum TaskStates {
    NotStarted = 'No Inciada',
    InProgress = 'En curso',
    Finished = 'Terminada',
}

interface Task {
    nombre: string;
    descripcion: string;
    empleadosResponsables: Array<string>;
    estado: TaskStates;
}

interface TaskGetResponse {
    message: Array<Task>;
}

interface TaskPostResponse {
    message: string;
}

@Route('/projects/{projectId}/tasks')
export default class TaskController {
    @Get('/')
    public async getTasks(@Path() projectId: string): Promise<TaskGetResponse> {
        let tasks = await TaskSchema.find({ proyectoID: projectId });
        return {
            message: tasks,
        };
    }

    @Post('/')
    public async createTask(
        @Path() projectId: any,
        @Body() requestBody: Task
    ): Promise<TaskPostResponse> {
        const { nombre, descripcion, empleadosResponsables, estado } =
            requestBody;
        const taskData = {
            nombre,
            descripcion,
            empleadosResponsables,
            estado,
            proyectoID: projectId,
        };
        let task = new TaskSchema(taskData);
        await task.save();
        return {
            message: 'todo salio bien',
        };
    }
}
