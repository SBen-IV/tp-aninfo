Feature: Borrado de Proyecto

    Como usuario
    Quiero borrar un proyecto creado
    Para dejar de llevar una trazabilidad sobre el mismo

    Scenario: Lista no vacía
        Given que estoy en la pagina de proyectos
        And hay al menos un proyecto creado
        When elimino el proyecto
        Then Todas las tareas asociadas se borrarán
        And se borra el proyecto
