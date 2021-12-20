Feature: Visualización de Proyecto

    Como usuario
    Quiero poder visualizar la informacion de un proyecto
    Para ver el estado del mismo

    Scenario: Visualización de proyecto exitosa
        Given que hay al menos un proyecto creado
        When consulto el proyecto
        Then Debería ver su nombre, estado, tipo, fecha de inicio, fecha de fin, descripción y tareas asociadas

    Scenario: Visualización de proyecto no exitosa
        Given que no hay proyectos
        When consulto los proyectos
        Then se me informa que no hay proyectos para consultar