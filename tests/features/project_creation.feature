Feature: Creación de proyecto

    Como usuario
    Quiero crear un proyecto
    Para tener una mejor trazabilidad sobre los proyectos existentes

    Scenario: Crear un proyecto con datos válidos
        Given que estoy en el formulario de creación del proyecto e ingreso los campos obligatorio nombre y tipo
        When entrego el formulario
        Then se crea el proyecto

    Scenario: Campo de nombre vacío
        Given que estoy en el formulario de creación del proyecto y no se ingresa un nombre
        When entrego el formulario
        Then no se crea el proyecto y se me informa que el proyecto debe tener un nombre

    Scenario: Campo de tipo vacío
        Given que estoy en el formulario de creación del proyecto y no se ingresa un tipo
        When entrego el formulario
        Then no se crea el proyecto y se me informa que el proyecto debe tener un tipo

    Scenario: Fechas inválidas
        Given que estoy en el formulario de creación del proyecto y la fecha de inicio ingresada es posterior a la fecha de fin ingresada
        When entrego el formulario
        Then no se crea el proyecto y se me informa que la fecha de inicio no puede ser posterior a la fecha de fin

    Scenario: Tipos de proyectos disponibles
        Given que estoy en el formulario de creación de un proyecto
        When elijo el tipo del proyecto
        Then se muestran los tipos de proyecto: Proyecto de Desarrollo y Proyecto de Implementación

    Scenario: Creación de proyecto cancelada
        Given que estoy en el formulario de creación de un proyecto
        When cancelo la creación del proyecto
        Then no se crea el proyecto
