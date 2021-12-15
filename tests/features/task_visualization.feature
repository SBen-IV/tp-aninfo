Feature:  Task visualization

    As a user
    I want to see the tasks in a project
    So that I can manage them

    Scenario: Task visualization successful
        Given there is at least one tasks created
        When I consult a task
        Then I should see the tasks' name, description, state and responsible employees.

    Scenario: Task visualization failure
        Given there are no tasks
        When I consult a task
        Then I'll be informed that there are no tasks to view.
