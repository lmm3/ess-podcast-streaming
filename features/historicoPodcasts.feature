Feature: Which podcasts the user listened
	As a user loged in the system
	I want to see all the podcasts i listened

	Scenario: Display a list of podcasts
	Given I am at the any page
	When I click at "user"
	And I click at "History"
	Then I am redirected to the user's "my history" page
	And I see the podcasts listened by the user.

Feature: View the history filtered by a date
    As an user that clicked at history button
    I choosed a date to use as a filter
    I can see the history page with the podcasts listened before the filter.

Scenario: As an user, i saw a few podcasts filtered in the "history" page
    Given I logged in as a "user"
    And I want see podcasts before the date "2023-03-28"
    When I navigate to the "history" page
    And I choosed a date to use as a filter
    Then I see 'status' : 200
    And  I see the the number of podcasts listened before the date.