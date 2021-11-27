import { Get, Post, Body, Path, Route, Delete, Patch, Query } from 'tsoa';
import TaskSchema, { Task } from '../schema/tasks';

interface TaskGetResponse {
    message: Array<Task>;
}

interface TaskPostResponse {
    message: string;
}

@Route('/projects/{projectId}/tasks')
export default class TaskController {
    @Get('/')
    public async getTasks(
        @Path() projectId: string,
        @Query() taskId?: any
    ): Promise<TaskGetResponse> {
        let tasks = taskId
            ? await TaskSchema.find({ _id: taskId })
            : await TaskSchema.find({ proyectoID: projectId });
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

    @Delete('/{taskId}')
    public async deleteTask(@Path() taskId: string): Promise<TaskPostResponse> {
        await TaskSchema.findByIdAndDelete(taskId);
        return {
            message: 'todo salio bien',
        };
    }

    public async deleteTasksFromProject(projectId: string): Promise<TaskPostResponse> {
        await TaskSchema.deleteMany({ pryectoID: projectId });
        return {
            message: 'todo salio bien',
        };
    }

    @Patch('/{taskId}')
    public async updateTask(
        @Path() taskId: string,
        @Body() requestBody: Task
    ): Promise<TaskPostResponse> {
        await TaskSchema.findByIdAndUpdate(taskId, requestBody);
        return {
            message: 'todo salio bien',
        };
    }
}
