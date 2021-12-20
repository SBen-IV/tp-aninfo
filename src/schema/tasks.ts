import mongoose, { Schema } from 'mongoose';

// Document interface
enum TaskStates {
    NotStarted = 'No Iniciada',
    InProgress = 'En curso',
    Finished = 'Terminada',
}

export interface Task {
    nombre: string;
    descripcion: string;
    empleadosResponsables: Array<string>;
    estado: TaskStates;
    proyectoID: string;
    ticketIDs: Array<string>;
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
    ticketIDs: [],
});

export default mongoose.model('task', task);
