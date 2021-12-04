Feature: Task modification

    As a user,
    I want to be able to modify a created task
    So to reflect changes that arose in the task.

    Scenario: Task Name Modification
        Given that I'm in the task modification form
        And I modify the name
        When I save the changes
        Then I should see the task with a new name.

    Scenario: Task Description Modification
        Given that I'm in the task modification form
        And I modify the description
        When I save the changes
        Then I should see the task with a new description.

    Scenario: Cancellation of Task Modification
        Given that I'm in the task modification form
        And I modify the description
        When I cancel the modification of the task
        Then the task is not modified.