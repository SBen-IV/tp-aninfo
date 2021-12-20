Feature: Modificación de proyecto

    Como usuario 
    quiero modificar un proyecto 
    para reflejar cambios que surgieron en el mismo.

    Escenario: Modificación de nombre
        Dado que estoy en el formulario de modificación del proyecto y modifico el nombre del mismo
        Cuando guardo los cambios
        Entonces el proyecto se muestra con todos los cambios realizados.

    Escenario: Modificación de fecha de fin
        Dado que estoy en el formulario de modificación del proyecto y modifico la fecha de fin del mismo
        Cuando guardo los cambios
        Entonces el proyecto se muestra con todos los cambios realizados.

    Escenario: Modificación de fecha de inicio
        Dado que estoy en el formulario de modificación del proyecto y modificó fecha de inicio del mismo
        Cuando guardo los cambios
        Entonces el proyecto se muestra con todos los cambios realizados.

    Escenario: Modificación de descripción
        Dado que estoy en el formulario de modificación del proyecto y modifico la descripción del mismo
        Cuando guardo los cambios
        Entonces el proyecto se muestra con todos los cambios realizados.

    Escenario: Modificación de líder
        Dado que estoy en el formulario de modificación del proyecto y modifico el líder del mismo
        Cuando guardo los cambios
        Entonces el proyecto muestra al nuevo líder ingresado..

    Escenario: Modificación de estado
        Dado que estoy en el formulario de modificación del proyecto y modifico el estado del mismo
        Cuando guardo los cambios
        Entonces el proyecto se muestra con todos los cambios realizados.

    Escenario: Modificación de tipo
        Dado que estoy en el formulario de modificación del proyecto y modifico el tipo
        Cuando guardo los cambios
        Entonces el proyecto se muestra con todos los cambios realizados.

    Escenario: Modificación cancelada
        Dado que estoy en el formulario de modificación del proyecto
        Cuando cancelo la edición
        Entonces no se guardarán los cambios.
