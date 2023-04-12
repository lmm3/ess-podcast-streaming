Feature: View the history
    As an user that clicked at history button
    I can see the history page.

Scenario: As an user, i saw a few podcasts in the "history" page
    Given I logged in as "ramonwanderley"
    When I navigate to the "history" page
    Then I can see 'status' : 200
    And  I can see the the number of podcasts listened
    And I can see "podciencia", "podpolitica" and "podeconomia" in the page.

Scenario: As an user, i can't see any podcasts in the "history" page
    Given I logged in as "romildojuliano"
    When I navigate to the "history" page
    Then I see 'status' : 200
    And I see a message "Ainda não ouviu nenhum podcast".

