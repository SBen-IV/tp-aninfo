Feature: Borrado de tareas

   Como usuario
   quiero borrar una tarea creada
   para reestructurar el trabajo.

    Scenario: Eliminar una tarea en la edición
        Given que estoy editando una tarea creada
        When la elimino
        Then se borra la tarea.

    Scenario: Eliminar una tarea creada
        Given que se me informan las tareas
        And hay al menos una tarea creada
        When elimino una de las tareas creadas
        Then se borra la tarea.
