import { Get, Post, Body, Route, Query, Delete, Path, Patch } from 'tsoa';
import ProjectSchema, { Project } from '../schema/project';

interface ProjectGetResponse {
    message: Array<Project>;
}

interface ProjectPostResponse {
    message: string;
}

@Route('/projects')
export default class ProjectController {
    @Get('/')
    public async getProjects(
        @Query() projectId?: any
    ): Promise<ProjectGetResponse> {
        let projects = projectId
            ? await ProjectSchema.find({ _id: projectId })
            : await ProjectSchema.find();
        return {
            message: projects,
        };
    }

    @Post('/')
    public async createProject(
        @Body() requestBody: Project
    ): Promise<ProjectPostResponse> {
        const {
            nombre,
            descripcion,
            fechaInicio,
            fechaFin,
            tipo,
            estado,
            liderProyecto,
        } = requestBody;
        const datosProyecto = {
            nombre,
            descripcion,
            fechaInicio,
            fechaFin,
            tipo,
            estado,
            liderProyecto,
        };
        let project = new ProjectSchema(datosProyecto);
        await project.save();
        return {
            message: 'todo salio bien',
        };
    }

    @Delete('/{projectId}')
    public async deleteProject(@Path() projectId: string) {
        await ProjectSchema.findByIdAndDelete(projectId);
        return {
            message: 'todo salio bien',
        };
    }

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
