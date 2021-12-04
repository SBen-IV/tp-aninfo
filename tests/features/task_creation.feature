Feature: Task creation

    As a user,
    I want to be able to create a task inside a project,
    So I can keep track of the work.

    Scenario: Successful Task Creation
        Given that I'm in the creation form
        And I fill the form with the following values:
            | name | description | employees |
        When I submit the form
        Then the task is created.

    Scenario: Empty Name Field
        Given that I'm in the creation form
        And I fill the form with the following values:
            | description | employees |
        When I submit the form
        Then the task isn't created
        And I'm informed that the task must have a name

    Scenario: Empty Description Field
        Given that I'm in the creation form
        And I fill the form with the following values:
            | name | employees |
        When I submit the form
        Then the task isn't created
        And I'm informed that the task must have a description

    Scenario: Successful Task Creation Without Employees
        Given that I'm in the creation form
        And I fill the form with the following values:
            | name | description |
        When I submit the form
        Then the task is created

    Scenario: Cancelled Task
        Given that I'm in the creation form
        When I cancel the creation of a task
        Then the task isn't created.