Feature: Project Visualization

    As a user
    I want to be able to consult a project
    So that I can manage them

    Scenario: Successful project visualization
        Given there is at least one project created
        When I consult a project
        Then I should see the project's name, type, start date, end date, and description

    Scenario: Unsuccessful project visualization
        Given there is no project created
        When I consult a project
        Then I am informed that there is no projects to consult 
