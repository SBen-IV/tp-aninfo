import { Get, Post, Body, Path, Route, Delete, Patch, Query, Tags } from 'tsoa';
import TaskSchema, { Task } from '../schema/tasks';

interface TaskGetResponse {
    message: Array<Task>;
}

interface TaskPostResponse {
    message: string;
}

@Route('')
@Tags("Tasks")
export default class TaskController {

    @Get('/tasks')
    public async getAllTasks( @Query() taskId?: any):Promise<TaskGetResponse> {
        const tasks = taskId ? await TaskSchema.find({ _id: taskId }) : await TaskSchema.find();
        return{
            message: tasks,
        }
    }


		/**
		 * Also filters by taskId if it's passed as a query parameter.
		 * 
		 * @summary Obtains all the tasks
		 */
    @Get('/projects/{projectId}/tasks')
    public async getTasks(
        @Path() projectId: string,
        @Query() taskId?: any
    ): Promise<TaskGetResponse> {
        const tasks = taskId
            ? await TaskSchema.find({ _id: taskId })
            : await TaskSchema.find({ proyectoID: projectId });
        return {
            message: tasks,
        };
    }

		/**
		 * @summary Creates a task
		 */
    @Post('/projects/{projectId}/tasks')
    public async createTask(
        @Path() projectId: any,
        @Body() requestBody: Task
    ): Promise<TaskPostResponse> {
        const taskData = {
						...requestBody,
            proyectoID: projectId,
        };
        const task = new TaskSchema(taskData);
        await task.save();
        return {
            message: task._id,
        };
    }

		/**
		 * @summary Deletes the task given the taskId
		 */
    @Delete('/projects/{projectId}/tasks/{taskId}')
    public async deleteTask(@Path() taskId: string): Promise<TaskPostResponse> {
        await TaskSchema.findByIdAndDelete(taskId);
        return {
            message: 'todo salio bien',
        };
    }

    public async deleteTasksFromProject(projectId: string): Promise<TaskPostResponse> {
        await TaskSchema.deleteMany({ proyectoID: projectId });
        return {
            message: 'todo salio bien',
        };
    }

		/**
		 * @summary Modifies the task given the taskId
		 */
    @Patch('/projects/{projectId}/tasks/{taskId}')
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
