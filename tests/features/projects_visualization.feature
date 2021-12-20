Feature: Visualización de proyectos

    Como usuario 
    quiero poder visualizar los proyectos existentes 
    para tener conocimiento de estos.

    Scenario: Visualización cuando hay proyectos
        Given que soy un usuario
        When visualizo proyectos
        Then se me informa su nombre, tipo, estado y líder

    Scenario: Visualización cuando no hay proyectos
        Given que soy usuario
        When visualizo proyectos y no existe ninguno
        Then se me informan que no existen proyectos y se me da la posibilidad de crear uno
