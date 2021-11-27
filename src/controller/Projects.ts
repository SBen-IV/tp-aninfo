import { Get, Post, Body, Route, Query, Delete, Path, Patch, Tags } from 'tsoa';
import ProjectSchema, { Project } from '../schema/project';

interface ProjectGetResponse {
    message: Array<Project>;
}

interface ProjectPostResponse {
    message: string;
}

@Route('/projects')
@Tags("Projects")
export default class ProjectController {

		/**
		 * Also filters by projectId if it's passed as a query parameter.
		 * 
		 * @summary Obtains all the projects
		 */
    @Get('/')
    public async getProjects(
        @Query() projectId?: any
    ): Promise<ProjectGetResponse> {
        const projects = projectId
            ? await ProjectSchema.find({ _id: projectId })
            : await ProjectSchema.find();
        return {
            message: projects,
        };
    }

		/**
		 * @summary Creates a project
		 */
    @Post('/')
    public async createProject(
        @Body() requestBody: Project
    ): Promise<ProjectPostResponse> {
        const project = new ProjectSchema(requestBody);
        await project.save();
        return {
            message: 'todo salio bien',
        };
    }

		/**
		 * @summary Deletes the project given the projectId
		 */
    @Delete('/{projectId}')
    public async deleteProject(@Path() projectId: string) {
        await ProjectSchema.findByIdAndDelete(projectId);
        return {
            message: 'todo salio bien',
        };
    }

		/**
		 * @summary Modifies the project given the projectId
		 */
    @Patch('/{projectId}')
    public async updateProject(
        @Path() projectId: string,
        @Body() requestBody: Project
    ): Promise<ProjectPostResponse> {
        await ProjectSchema.findByIdAndUpdate(projectId, requestBody);
        return {
            message: 'todo salio bien',
        };
    }
}
