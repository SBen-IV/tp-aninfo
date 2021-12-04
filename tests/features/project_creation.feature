Feature: Project Creation

    As a user, 
    I want to be able to create a new project, 
    so that I can track my projects and tasks.

    Scenario: Succesful Project Creation
        Given that I'm in the creation form
        And I fill the form with the following values:
            | name | type | startDate | endDate | description |
        When I submit the form
        Then I should see the project in the list

    Scenario: Empty Name Field
        Given that I'm in the creation form
        And I fill the form with the following values:
            | type | startDate | endDate | description |
        When I submit the form
        Then I don't see the project in the list
        And I'm informed that the project must have a name 

    Scenario: Empty Type Field
        Given that I'm in the creation form
        And I fill the form with the following values:
            | name | startDate | endDate | description |
        When I submit the form
        Then I don't see the project in the list
        And I'm informed that the project must have a type 

    Scenario: Empty Start Date Field
        Given that I'm in the creation form
        And I fill the form with the following values:
            | name | type | endDate | description |
        When I submit the form
        Then I don't see the project in the list
        And I'm informed that the project must have a start date

    Scenario: Empty End Date Field
        Given that I'm in the creation form
        And I fill the form with the following values:
            | name | type | startDate | description |
        When I submit the form
        Then I don't see the project in the list
        And I'm informed that the project must have an end date

    Scenario: Empty Description Field
        Given that I'm in the creation form
        And I fill the form with the following values:
            | name | type | startDate | endDate |
        When I submit the form
        Then I don't see the project in the list
        And I'm informed that the project must have a description

    Scenario: Invalid Start And End Date
        Given that I'm in the creation form
        And the start date is after the end date
        When I submit the form
        Then I don't see the project in the list
        And I'm informed that the project must have a valid start and end date
