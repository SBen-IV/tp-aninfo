Feature: Project Creation

    As a user, 
    I want to be able to modify a created project, 
    So to reflect changes that arose in the project.

    Scenario: Project Name Modification
        Given that I'm in the project modification form
        And I change the project name
        When I save the changes
        Then I should see the project with the new name

    Scenario: Project Description Modification
        Given that I'm in the project modification form
        And I change the project description
        When I save the changes
        Then I should see the project with the new description
    
    Scenario: Project Status Modification
        Given that I'm in the project modification form
        And I change the project status
        When I save the changes
        Then I should see the project with the new status

    Scenario: Project Start Date Modification
        Given that I'm in the project modification form
        And I change the project start date
        When I save the changes
        Then I should see the project with the new start date
    
    Scenario: Project End Date Modification
        Given that I'm in the project modification form
        And I change the project end date
        When I save the changes
        Then I should see the project with the new end date

    Scenario: Project Participants Modification
        Given that I'm in the project modification form
        And I change the project participants
        When I save the changes
        Then I should see the project with the new participants

    Scenario: Cancellation of Project Modification
        Given that I'm in the project modification form
        And I make some changes
        When I cancel the project modification
        Then I should see the project without changes