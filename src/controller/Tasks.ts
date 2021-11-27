import { Get, Post, Body, Path, Route } from "tsoa";
import task from "../schema/tasks";

enum TaskStates{
    NoIniciado = "No Inciada",
    EnCurso = "En curso",
    Terminado = "Terminada"
}

interface Task {
    nombre: string,
    descripcion: string,
    empleadosResponsables: Array<string>,
    estado: TaskStates
}


interface TaskGetResponse {
  message: Array<Task>;
}

interface TaskPostResponse {
    message: string;
}

@Route("/projects/{projectId}/tasks")
export default class TaskController {

  @Get("/")
  public async getTasks(@Path() projectId: string): Promise<TaskGetResponse> {
    let Tareas = await task.find({ proyectoID: projectId });
    return {
      message: Tareas
    };
  }

  @Post("/")
  public async createTask(@Path() projectId: any, @Body() requestBody: Task): Promise<TaskPostResponse>{
    const { nombre , descripcion , empleadosResponsables , estado } = requestBody;
    const datosTarea = {nombre, descripcion, empleadosResponsables, estado, proyectoID : projectId};
    let Tarea = new task(datosTarea);
    await Tarea.save();
    return{
        message: "todo salio bien"
    };
  }
}