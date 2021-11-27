import { Get, Post, Body, Route } from "tsoa";
import project from "../schema/project";

enum ProjectTypes{
    Desarrollo = "Desarrollo",
    Implementacion = "Implementacion"
}

enum States{
    NoIniciado = "No Inciado",
    EnCurso = "En curso",
    Terminado = "Terminado"
}
interface Project {
    nombre: string,
    descripcion: string,
    fechaInicio: Date,
    fechaFin: Date,
    tipo: ProjectTypes,
    estado: States,
    liderProyecto: string
}


interface ProjectGetResponse {
  message: Array<Project>;
}

interface ProjectPostResponse {
    message: string;
}

@Route("/projects")
export default class ProjectController {
  @Get("/")
  public async getProjects(): Promise<ProjectGetResponse> {
    let Proyectos = await project.find();
    return {
      message: Proyectos
    };
  }
  @Post("/")
  public async createProject(@Body() requestBody: Project): Promise<ProjectPostResponse>{
    const { nombre , descripcion , fechaInicio , fechaFin , tipo , estado , liderProyecto  } = requestBody;
    const datosProyecto = {nombre, descripcion, fechaInicio, fechaFin, tipo, estado, liderProyecto};
    let Proyecto = new project(datosProyecto);
    await Proyecto.save();
    return{
        message: "todo salio bien"
    };
  }
}