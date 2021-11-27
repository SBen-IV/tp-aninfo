import mongoose,{ Schema } from 'mongoose';

// Document interface
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

// Schema
const project = new Schema<Project>({
  nombre: { type: String, required: true },
  descripcion: { type: String, default: ""},
  fechaInicio: { type: Date},
  fechaFin: { type: Date},
  tipo: { type: String, enum: Object.values(ProjectTypes), default: ProjectTypes.Desarrollo },
  estado: { type: String, enum: Object.values(States), default: States.NoIniciado },
  liderProyecto: { type: String, default: "" }
});


export default mongoose.model("project", project);