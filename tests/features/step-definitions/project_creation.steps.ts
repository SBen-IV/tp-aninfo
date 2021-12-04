import { Given, When, Then, TableDefinition } from "cucumber";


Given("that I\"m in the creation form", function () {
    // Write code here that turns the phrase above into concrete actions
    return "pending";
});

Given("I fill the form with the following values:", function (dataTable: TableDefinition) {
    console.log(dataTable.rows());
});

When("I submit the form", function () {
    // Write code here that turns the phrase above into concrete actions
    return "pending";
});

Then("I should see the project in the list", function () {
    // Write code here that turns the phrase above into concrete actions
    return "pending";
});

Then("I shouldn't see the project in the list", function () {
    // Write code here that turns the phrase above into concrete actions
    return "pending";
});

Then("I'm informed that the project must have a {string}", function (missingField: string) {
    // Write code here that turns the phrase above into concrete actions
    return "pending";
});

Given("the start date is after the end date", function (){
    // Write code here that turns the phrase above into concrete actions
    return "pending";
});
