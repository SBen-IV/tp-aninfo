Feature: Visualización de tarea

    Como usuario
    Quiero poder visualizar la información de una tarea existente asociada a un proyecto existente
    Para ver el estado de la misma.

    Escenario: Visualizacion exitosa de la tarea
        Dado que hay al menos una tarea creada
        Cuando consulto una tarea
        Entonces me muestra nombre, descripción, estado y empleado responsable y ticket asociado.

    Escenario: Visualizacion fallida de la tarea
        Dado que no hay tareas
        Cuando consulto las tareas
        Entonces se me informará que no hay tareas para consultar.
