Feature: Creación de tareas

    Como usuario 
    quiero crear una tarea dentro de un proyecto
    para dividir el trabajo en varias partes y así tener una mejor organización del trabajo.

    Scenario: Crear una tarea con datos válidos
        Given que estoy en el formulario de creación de una tarea e ingreso los datos: nombre, proyecto
        When entrego el formulario
        Then se crea la tarea.
    
    Scenario: Campo de nombre vacío
        Given que estoy en el formulario de creación de una tarea
        And no se ingresa un nombre
        When entrego el formulario
        Then no se crea la tarea 
        And se me informa que la tarea debe tener un nombre.
    
    Scenario: Campo de proyecto vacío
        Given que estoy en el formulario de creación de una tarea
        And no se ingresa un proyecto
        When entrego el formulario
        Then no se crea la tarea 
        And se me informa que la tarea debe tener un proyecto asociado.
    
    Scenario: Cancelar creación
        Given que estoy en el formulario de creación una tarea
        When cancelo la creación de la tarea
        Then no se crea la tarea.
