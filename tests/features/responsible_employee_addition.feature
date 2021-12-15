Feature: Registration of responsible employees in created tasks 

    As a user
    I want to be able to register responsible employees in created tasks
    So that I can asign them responsibilities 

    Scenario: Employee can be registered as responsible in task creation form
        Given I am in the task creation form
        And I register a responsible employee
        When I submit the form
        Then I should see the responsible employee in the list of responsible employees

    Scenario: Employee can be registered as responsible in task modification form
        Given I am in the task creation form
        And I register a responsible employee
        When I submit the form
        Then I should see the responsible employee in the list of responsible employees       

    