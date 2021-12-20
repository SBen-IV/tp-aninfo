import { Given, When, Then } from "cucumber";
import { proyectosAPI } from "../../../src/axios";


Given("que estoy en el formulario de modificación del proyecto y modifico el nombre del mismo", async function() {
	this.nuevoNombre = "Nuevo nombre";
	const response = await proyectosAPI.post('/proyectos', {
		nombre: this.nuevoNombre,
		tipo: this.tipo,
	});
	this.proyecto = await proyectosAPI.get('/proyectos/1');
});

When("guardo los cambios", async function() {
	this.response = await proyectosAPI.patch(`/projects/${this.proyecto._id}`, {
		nombre: this.nuevoNombre,
	});
});

Then("el proyecto se muestra con todos los cambios realizados.", function() {
	// Write code here that turns the phrase above into concrete actions
	return "pending";
});

Given("que estoy en el formulario de modificación del proyecto y modifico la fecha de fin del mismo", function() {
	// Write code here that turns the phrase above into concrete actions
	return "pending";
});

Given("que estoy en el formulario de modificación del proyecto y modificó fecha de inicio del mismo", function() {
	// Write code here that turns the phrase above into concrete actions
	return "pending";
});

Given("que estoy en el formulario de modificación del proyecto y modifico la descripción del mismo", function() {
	// Write code here that turns the phrase above into concrete actions
	return "pending";
});

Given("que estoy en el formulario de modificación del proyecto y modifico el líder del mismo", function() {
	// Write code here that turns the phrase above into concrete actions
	return "pending";
});

Then("el proyecto muestra al nuevo líder ingresado..", function() {
	// Write code here that turns the phrase above into concrete actions
	return "pending";
});

Given("que estoy en el formulario de modificación del proyecto y modifico el estado del mismo", function() {
	// Write code here that turns the phrase above into concrete actions
	return "pending";
});

Given("que estoy en el formulario de modificación del proyecto y modifico el tipo", function() {
	// Write code here that turns the phrase above into concrete actions
	return "pending";
});

Given("que estoy en el formulario de modificación del proyecto", function() {
	// Write code here that turns the phrase above into concrete actions
	return "pending";
});

When("cancelo la edición", function() {
	// Write code here that turns the phrase above into concrete actions
	return "pending";
});

Then("no se guardarán los cambios.", function() {
	// Write code here that turns the phrase above into concrete actions
	return "pending";
});

