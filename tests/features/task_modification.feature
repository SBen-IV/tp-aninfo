Feature: Task modification

    Como usuario,
    quiero modificar una tarea 
    para reflejar cambios que surgieron en la misma.

    Escenario: Modificacion del nombre de la tarea
        Dado que estoy modificando una tarea creada
        Y modifico el nombre
        Cuando guardo los cambios
        Entonces la tarea se muestra con todos los cambios realizados.

    Escenario: Modificacion de la descripcion de la tarea
        Dado que estoy modificando una tarea creada
        Y modifico la descripción
        Cuando guardo los cambios
        Entonces la tarea se muestra con todos los cambios realizados.
    
    Escenario: Modificacion del proyecto de la tarea
        Dado que estoy modificando una tarea creada
        Y modifico el proyecto
        Cuando guardo los cambios
        Entonces la tarea se muestra con todos los cambios realizados
    
    Escenario: Modificacion del estado de un proyecto
        Dado que estoy modificando una tarea creada
        Y modifico el estado
        Cuando guardo los cambios
        Entonces la tarea se muestra con todos los cambios realizados.

    Escenario: Modificacion del empleado responsable de la tarea
        Dado que estoy modificando una tarea creada
        Y  modifico el empleado responsable
        Cuando guardo los cambios
        Entonces la tarea se muestra con todos los cambios realizados.

    Escenario: Cancellation of Task Modification
        Given that I'm in the task modification form
        And I modify the description
        When I cancel the modification of the task
        Then the task is not modified.
