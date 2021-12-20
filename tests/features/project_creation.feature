Feature: Creación de proyecto

    Como usuario
    Quiero crear un proyecto
    Para tener una mejor trazabilidad sobre los proyectos existentes

    Escenario: Crear un proyecto con datos válidos
        Dado que estoy en el formulario de creación del proyecto e ingreso los campos obligatorio nombre y tipo
        Cuando entrego el formulario
        Entonces se crea el proyecto

    Escenario: Campo de nombre vacío
        Dado que estoy en el formulario de creación del proyecto y no se ingresa un nombre
        Cuando entrego el formulario
        Entonces no se crea el proyecto y se me informa que el proyecto debe tener un nombre

    Escenario: Campo de tipo vacío
        Dado que estoy en el formulario de creación del proyecto y no se ingresa un tipo
        Cuando entrego el formulario
        Entonces no se crea el proyecto y se me informa que el proyecto debe tener un tipo

    Escenario: Fechas inválidas
        Dado que estoy en el formulario de creación del proyecto y la fecha de inicio ingresada es posterior a la fecha de fin ingresada
        Cuando entrego el formulario
        Entonces no se crea el proyecto y se me informa que la fecha de inicio no puede ser posterior a la fecha de fin

    Escenario: Tipos de proyectos disponibles
        Dado que estoy en el formulario de creación de un proyecto
        Cuando elijo el tipo del proyecto
        Entonces se muestran los tipos de proyecto: Proyecto de Desarrollo y Proyecto de Implementación

    Escenario:
        Dado que estoy en el formulario de creación de un proyecto
        Cuando cancelo la creación del proyecto
        Entonces no se crea el proyecto
