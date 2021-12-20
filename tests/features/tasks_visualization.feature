Feature: Visualización de tareas

    Como usuario
    Quiero poder visualizar las tareas existentes asociadas a un proyecto existente
    Para poder tener conocimiento de estas.

    Escenario: Visualizacion de tareas cuando existen
        Dado que soy un usuario
        Cuando visualizo tareas
        Entonces se me informa su nombre, estado.

    Escenario: Visualizacion de tareas cuando no existen
        Dado que soy usuario
        Cuando visualizo tareas y no existe ninguna
        Entonces se me informan que no existen tareas y se me da la posibilidad de crear una.
        