Feature: Modificación de proyecto

    Como usuario 
    quiero modificar un proyecto 
    para reflejar cambios que surgieron en el mismo.

    Scenario: Modificación de nombre
        Given que estoy en el formulario de modificación del proyecto y modifico el nombre del mismo
        When guardo los cambios
        Then el proyecto se muestra con todos los cambios realizados.

    Scenario: Modificación de fecha de fin
        Given que estoy en el formulario de modificación del proyecto y modifico la fecha de fin del mismo
        When guardo los cambios
        Then el proyecto se muestra con todos los cambios realizados.

    Scenario: Modificación de fecha de inicio
        Given que estoy en el formulario de modificación del proyecto y modificó fecha de inicio del mismo
        When guardo los cambios
        Then el proyecto se muestra con todos los cambios realizados.

    Scenario: Modificación de descripción
        Given que estoy en el formulario de modificación del proyecto y modifico la descripción del mismo
        When guardo los cambios
        Then el proyecto se muestra con todos los cambios realizados.

    Scenario: Modificación de líder
        Given que estoy en el formulario de modificación del proyecto y modifico el líder del mismo
        When guardo los cambios
        Then el proyecto muestra al nuevo líder ingresado..

    Scenario: Modificación de estado
        Given que estoy en el formulario de modificación del proyecto y modifico el estado del mismo
        When guardo los cambios
        Then el proyecto se muestra con todos los cambios realizados.

    Scenario: Modificación de tipo
        Given que estoy en el formulario de modificación del proyecto y modifico el tipo
        When guardo los cambios
        Then el proyecto se muestra con todos los cambios realizados.

    Scenario: Modificación cancelada
        Given que estoy en el formulario de modificación del proyecto
        When cancelo la edición
        Then no se guardarán los cambios.
