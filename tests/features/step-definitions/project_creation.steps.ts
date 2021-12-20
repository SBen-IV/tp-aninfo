import { Given, When, Then } from "cucumber";
import { proyectosAPI } from "../../../src/axios";
import { Proyecto } from "../../interfaces/Proyecto";

Given("que estoy en el formulario de creación del proyecto e ingreso los campos obligatorios nombre y tipo", function() {
	this.nombre = 'Proyecto de prueba';
	this.tipo = 'Desarrollo';
	return true;
});

When("entrego el formulario", async function() {
	const response: Proyecto = await proyectosAPI.post('/proyectos', {
		nombre: this.nombre,
		tipo: this.tipo,
	});
	this.response = response;
	return true;
});

Then("se crea el proyecto", function() {
	expect(this.response.status).toBe(201);
	expect(this.response.nombre).toBe(this.nombre);
	expect(this.response.tipo).toBe(this.tipo);
	return true;
});

Given("que estoy en el formulario de creación del proyecto y no se ingresa un nombre", function() {
	this.tipo = 'Desarrollo';
});

When("entrego el formulario", async function() {
	this.response = await proyectosAPI.post('/proyectos', {
		tipo: this.tipo,
	});
});

Then("no se crea el proyecto y se me informa que el proyecto debe tener un nombre", function() {
	expect(this.response.status).toBe(404);
});

Given("que estoy en el formulario de creación del proyecto y no se ingresa un tipo", function() {
	this.nombre = 'Proyecto de prueba';
});

When("entrego el formulario", async function() {
	this.response = await proyectosAPI.post('/proyectos', {
		nombre: this.nombre,
	});
});

Then("no se crea el proyecto y se me informa que el proyecto debe tener un tipo", function() {
	expect(this.response.status).toBe(404);
});

Given("que estoy en el formulario de creación del proyecto y la fecha de inicio ingresada es posterior a la fecha de fin ingresada", async function() {
	this.fechaDeInicioIncorrecta = '2020-01-02';
	this.fechaDeFinIncorrecta = '2020-01-01';
});

When("entrego el formulario", async function() {
	this.response = await proyectosAPI.post('/proyectos', {
		nombre: this.nombre,
		tipo: this.tipo,
		fechaInicio: '2020-01-02',
		fechaFin: '2020-01-01',
	});
});

Then("no se crea el proyecto y se me informa que la fecha de inicio no puede ser posterior a la fecha de fin", function() {
	expect(this.response.status).toBe(404);
});

Given("que estoy en el formulario de creación de un proyecto", function() {
	// Write code here that turns the phrase above into concrete actions
	return "pending";
});

When("elijo el tipo del proyecto", function() {
	// Write code here that turns the phrase above into concrete actions
	return "pending";
});

Then("se muestran los tipos de proyecto: Proyecto de Desarrollo y Proyecto de Implementación", function() {
	// Write code here that turns the phrase above into concrete actions
	return "pending";
});

When("cancelo la creación del proyecto", function() {
	// Write code here that turns the phrase above into concrete actions
	return "pending";
});

Then("no se crea el proyecto", function() {
	// Write code here that turns the phrase above into concrete actions
	return "pending";
});

