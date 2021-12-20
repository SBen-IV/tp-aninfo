Feature: Visualización de proyectos

    Como usuario 
    quiero poder visualizar los proyectos existentes 
    para tener conocimiento de estos.

    Escenario: Visualización cuando hay proyectos
        Dado que soy un usuario
        Cuando visualizo proyectos
        Entonces se me informa su nombre, tipo, estado y líder

    Escenario: Visualización cuando no hay proyectos
        Dado que soy usuario
        Cuando visualizo proyectos y no existe ninguno
        Entonces se me informan que no existen proyectos y se me da la posibilidad de crear uno
