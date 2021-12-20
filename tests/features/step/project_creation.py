from dataclasses import dataclass
from typing import Optional
from behave import *
from behave.runner import Context
import requests

@dataclass
class Proyecto:
    id: str
    nombre: str
    descripcion: Optional[str]
    tipo: str
    fecha_inicio: Optional[str]
    fecha_fin: Optional[str]
    estado: Optional[str]
    lider_de_proyecto: Optional[str]

BASE = 'https://squad10-aninfo-backend.herokuapp.com'

@given(u'que estoy en el formulario de creación del proyecto e ingreso los campos obligatorio nombre y tipo')
def step_impl(context):
    context.nombre = "Proyecto de prueba"
    context.tipo = "Desarrollo"

@when(u'entrego el formulario')
def step_impl(context):
    context.post_response = requests.post(BASE + '/projects', json={
        "nombre": context.nombre,
        "tipo": context.tipo
    })

@then(u'se crea el proyecto')
def step_impl(context):
    assert context.post_response.ok


@given(u'que estoy en el formulario de creación del proyecto y no se ingresa un nombre')
def step_impl(context):
    context.nombre = None
    context.tipo = "Desarrollo"

@then(u'no se crea el proyecto y se me informa que el proyecto debe tener un nombre')
def step_impl(context):
    assert not context.post_response.ok

@given(u'que estoy en el formulario de creación del proyecto y no se ingresa un tipo')
def step_impl(context):
    raise NotImplementedError(u'STEP: Given que estoy en el formulario de creación del proyecto y no se ingresa un tipo')


@then(u'no se crea el proyecto y se me informa que el proyecto debe tener un tipo')
def step_impl(context):
    raise NotImplementedError(u'STEP: Then no se crea el proyecto y se me informa que el proyecto debe tener un tipo')


@given(u'que estoy en el formulario de creación del proyecto y la fecha de inicio ingresada es posterior a la fecha de fin ingresada')
def step_impl(context):
    raise NotImplementedError(u'STEP: Given que estoy en el formulario de creación del proyecto y la fecha de inicio ingresada es posterior a la fecha de fin ingresada')


@then(u'no se crea el proyecto y se me informa que la fecha de inicio no puede ser posterior a la fecha de fin')
def step_impl(context):
    raise NotImplementedError(u'STEP: Then no se crea el proyecto y se me informa que la fecha de inicio no puede ser posterior a la fecha de fin')


@given(u'que estoy en el formulario de creación de un proyecto')
def step_impl(context):
    raise NotImplementedError(u'STEP: Given que estoy en el formulario de creación de un proyecto')


@when(u'elijo el tipo del proyecto')
def step_impl(context):
    raise NotImplementedError(u'STEP: When elijo el tipo del proyecto')


@then(u'se muestran los tipos de proyecto: Proyecto de Desarrollo y Proyecto de Implementación')
def step_impl(context):
    raise NotImplementedError(u'STEP: Then se muestran los tipos de proyecto: Proyecto de Desarrollo y Proyecto de Implementación')


@when(u'cancelo la creación del proyecto')
def step_impl(context):
    raise NotImplementedError(u'STEP: When cancelo la creación del proyecto')


@then(u'no se crea el proyecto')
def step_impl(context):
    raise NotImplementedError(u'STEP: Then no se crea el proyecto')