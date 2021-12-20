Feature: Creación de tareas

    Como usuario 
    quiero crear una tarea dentro de un proyecto
    para dividir el trabajo en varias partes y así tener una mejor organización del trabajo.

    Escenario: Crear una tarea con datos válidos
        Dado que estoy en el formulario de creación de una tarea e ingreso los datos: nombre, proyecto
        Cuando entrego el formulario
        Entonces se crea la tarea.
    
    Escenario: Campo de nombre vacío
        Dado que estoy en el formulario de creación de una tarea
        Y no se ingresa un nombre
        Cuando entrego el formulario
        Entonces no se crea la tarea 
        Y se me informa que la tarea debe tener un nombre.
    
    Escenario: Campo de proyecto vacío
        Dado que estoy en el formulario de creación de una tarea
        Y no se ingresa un proyecto
        Cuando entrego el formulario
        Entonces no se crea la tarea 
        Y se me informa que la tarea debe tener un proyecto asociado.
    
    Escenario: Cancelar creación
        Dado que estoy en el formulario de creación una tarea
        Cuando cancelo la creación de la tarea
        Entonces no se crea la tarea.
