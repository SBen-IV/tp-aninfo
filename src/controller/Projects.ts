import { Get, Post, Body, Route, Query, Delete, Path } from 'tsoa';
import ProjectSchema from '../schema/project';

enum ProjectTypes {
    Development = 'Desarrollo',
    Implementation = 'Implementacion',
}

enum States {
    NotStarted = 'No Inciado',
    InProgress = 'En curso',
    Finished = 'Terminado',
}
interface Project {
    nombre: string;
    descripcion: string;
    fechaInicio: Date;
    fechaFin: Date;
    tipo: ProjectTypes;
    estado: States;
    liderProyecto: string;
}

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
}
