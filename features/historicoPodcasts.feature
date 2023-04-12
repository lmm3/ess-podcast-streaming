Feature: Which podcasts the user listened
	As a user loged in the system
	I want to see all the podcasts i listened

	Scenario: Display a list of podcasts
	Given I am at the any page
	When I click at "user"
	And I click at "History"
	Then I am redirected to the user's "my history" page
	And I see the podcasts heard by the user

	Scenario: View another user's history
	Given I'm on another user's profile
	When I select the "History"
	Then I am redirected to the target user's "my history" page
	And I see the podcasts heard by the target user
	And I am able to listen to podcasts heard by the target user

	Scenario: View the history filtered by a date
	Given I'm on "History" page
	When I select the date i want
	Then I see all podcasts listened before the date

Feature: View the history filtered by a date
    As an user that clicked at history button
    I choosed a date to use as a filter
    I can see the history page with the podcasts listened before the filter.

Scenario: As an user, i saw a few podcasts filtered in the "history" page
    Given I logged in as "ramonwanderley"
    And I saw "podciencia" and "podpolitica" before the date "2023-03-28"
    When I navigate to the "history" page
    And I choosed "2023-03-28" as a date to use as a filter
    Then I can see 'status' : 200
    And  I can see the the number of podcasts listened before the date
    And I can see "podciencia" and "podpolitica" in the page.

Scenario: As an user, i can't see any podcasts filtered in the "history" page
    Given I logged in as "romildojuliano"
    And i didn't see any podcast before the date "2023-03-28"
    When I navigate to the "history" page
    And I choosed "2023-03-28" as a date to use as a filter
    Then I can see 'status' : 200
    And I see a message "Ainda não ouviu nenhum podcast".
