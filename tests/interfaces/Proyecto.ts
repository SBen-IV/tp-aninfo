enum ProjectTypes {
    Development = 'Desarrollo',
    Implementation = 'Implementacion',
}

enum States {
    NotStarted = 'No Iniciado',
    InProgress = 'En curso',
    Finished = 'Terminado',
}

export interface Proyecto {
    nombre: string;
    descripcion: string;
    fechaInicio: Date;
    fechaFin: Date;
    tipo: ProjectTypes;
    estado: States;
    liderProyecto: string;
}