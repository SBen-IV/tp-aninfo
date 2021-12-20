Feature: Borrado de tareas

   Como usuario
   quiero borrar una tarea creada
   para reestructurar el trabajo.

    Escenario: Eliminar una tarea en la edición
        Dado que estoy editando una tarea creada
        Cuando la elimino
        Entonces se borra la tarea.

    Escenario: Eliminar una tarea creada
        Dado que se me informan las tareas
        Y hay al menos una tarea creada
        Cuando elimino una de las tareas creadas
        Entonces se borra la tarea.
