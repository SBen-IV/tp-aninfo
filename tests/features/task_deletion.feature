Feature: Task Deletion

    As a user,
    I want to delete a created task
    So that I can delete it from the system

    Scenario: Task deletion in modification form
        Given that I'm modifying a task
        When I delete the task
        Then the task is deleted
        And I shouldn't see the task in the project.

    Scenario: Task deletion in list of tasks
        Given that I'm in the list of tasks
        And there's at least one task created
        When I delete the tasks created
        Then the tasks are deleted
        And I shouldn't see the task in the project.

    Scenario: Task doesn't exist
        Given that a task doesn't exist
        When I delete the task
        Then I should see and error message: "The task doesn't exists"
