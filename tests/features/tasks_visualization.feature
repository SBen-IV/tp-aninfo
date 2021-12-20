Feature: Visualización de tareas

    Como usuario
    Quiero poder visualizar las tareas existentes asociadas a un proyecto existente
    Para poder tener conocimiento de estas.

    Scenario: Visualizacion de tareas cuando existen
        Given que soy un usuario
        When visualizo tareas
        Then se me informa su nombre, estado.

    Scenario: Visualizacion de tareas cuando no existen
        Given que soy usuario
        When visualizo tareas y no existe ninguna
        Then se me informan que no existen tareas y se me da la posibilidad de crear una.
        