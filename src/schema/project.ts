import mongoose, { Schema } from 'mongoose';

// Document interface
enum ProjectTypes {
    Development = 'Desarrollo',
    Implementation = 'Implementacion',
}

enum States {
    NotStarted = 'No Iniciado',
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

// Schema
const project = new Schema<Project>({
    nombre: { type: String, required: true },
    descripcion: { type: String, default: '' },
    fechaInicio: { type: Date },
    fechaFin: { type: Date },
    tipo: {
        type: String,
        enum: Object.values(ProjectTypes),
        default: ProjectTypes.Development,
    },
    estado: {
        type: String,
        enum: Object.values(States),
        default: States.NotStarted,
    },
    liderProyecto: { type: String, default: '' },
});

export default mongoose.model('project', project);
