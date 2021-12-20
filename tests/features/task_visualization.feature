Feature: Visualización de tarea

    Como usuario
    Quiero poder visualizar la información de una tarea existente asociada a un proyecto existente
    Para ver el estado de la misma.

    Scenario: Visualizacion exitosa de la tarea
        Given que hay al menos una tarea creada
        When consulto una tarea
        Then me muestra nombre, descripción, estado y empleado responsable y ticket asociado.

    Scenario: Visualizacion fallida de la tarea
        Given que no hay tareas
        When consulto las tareas
        Then se me informará que no hay tareas para consultar.
