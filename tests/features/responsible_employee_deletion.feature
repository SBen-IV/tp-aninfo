Feature: Deletion of responsible employees in created tasks

    As a user
    I want to be able to delete responsible employees in created tasks
    So I can release them from their responsibility

    Scenario: Successful responsible employee deletion from a task
        Given I am on the task modification form
        And I delete a responsible employee from the task that I am editing
        When I save the changes
        Then the employee will be deleted from the task.
    
    Scenario: Cancelation of responsible employee deletion from a task
        Given I am on the task modification form
        And I delete a responsible employee from the task that I am editing
        When I cancel the changes
        Then the employee will not be deleted from the task.
