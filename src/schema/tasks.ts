import mongoose, { Schema } from 'mongoose';

// Document interface

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
    proyectoID: string;
}

// Schema
const task = new Schema<Task>({
    nombre: { type: String, required: true },
    descripcion: { type: String, default: '' },
    empleadosResponsables: [],
    estado: {
        type: String,
        enum: Object.values(TaskStates),
        default: TaskStates.NotStarted,
    },
    proyectoID: { type: String, required: true },
});

export default mongoose.model('task', task);
