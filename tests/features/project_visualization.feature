Feature: Visualización de Proyecto

    Como usuario
    Quiero poder visualizar la informacion de un proyecto
    Para ver el estado del mismo

    Escenario: Visualización de proyecto exitosa
        Dado que hay al menos un proyecto creado
        Cuando consulto el proyecto
        Entonces Debería ver su nombre, estado, tipo, fecha de inicio, fecha de fin, descripción y tareas asociadas

    Scenario: Visualización de proyecto no exitosa
        Dado que no hay proyectos
        Cuando consulto los proyectos
        Entonces se me informa que no hay proyectos para consultar