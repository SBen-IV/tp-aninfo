Feature: Project Deletion

    As a user
    I want to delete a created project
    So that I can delete it from the system

    Scenario: Delete a project
        Given that I'm modifying a project
        When I delete the project
        Then all the associated tasks are deleted
        And the project is deleted
        And I should't see the project in the projects list

    Scenario: 
        Given that I'm in the project list page
        And there is at least one created project
        When I delete the project
        Then all the associated tasks are deleted
        And the project is deleted
        And I should't see the project in the projects list

    Scenario: 
        Given that a project doesn't exist
        When I delete the project
        Then I should see an error message: "Project doesn't exist"