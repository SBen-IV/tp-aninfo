Feature: Borrado de Proyecto

    Como usuario
    Quiero borrar un proyecto creado
    Para dejar de llevar una trazabilidad sobre el mismo

    Escenario: Borrar un proyecto
        Dado que estoy editando un proyecto
        Cuando elimino el proyecto
        Entonces Todas las tareas asociadas al proyecto se borrarán
        Y se borra el proyecto

    Escenario: Lista no vacía
        Dado que estoy en la pagina de proyectos
        Y hay al menos un proyecto creado
        Cuando elimino el proyecto
        Entonces Todas las tareas asociadas se borrarán
        Y se borra el proyecto
