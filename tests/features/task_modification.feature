Feature: Task modification

    Como usuario,
    quiero modificar una tarea 
    para reflejar cambios que surgieron en la misma.

    Scenario: Modificacion del nombre de la tarea
        Given que estoy modificando una tarea creada
        And modifico el nombre
        When guardo los cambios
        Then la tarea se muestra con todos los cambios realizados.

    Scenario: Modificacion de la descripcion de la tarea
        Given que estoy modificando una tarea creada
        And modifico la descripción
        When guardo los cambios
        Then la tarea se muestra con todos los cambios realizados.
    
    Scenario: Modificacion del proyecto de la tarea
        Given que estoy modificando una tarea creada
        And modifico el proyecto
        When guardo los cambios
        Then la tarea se muestra con todos los cambios realizados
    
    Scenario: Modificacion del estado de un proyecto
        Given que estoy modificando una tarea creada
        And modifico el estado
        When guardo los cambios
        Then la tarea se muestra con todos los cambios realizados.

    Scenario: Modificacion del empleado responsable de la tarea
        Given que estoy modificando una tarea creada
        And  modifico el empleado responsable
        When guardo los cambios
        Then la tarea se muestra con todos los cambios realizados.

    Scenario: Cancellation of Task Modification
        Given that I'm in the task modification form
        And I modify the description
        When I cancel the modification of the task
        Then the task is not modified.
