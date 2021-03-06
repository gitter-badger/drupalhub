Feature: Testing the event section.

  @javascript
  Scenario: Testing validation of the form.
    Given I am logging in as "ClarkKent"
      And I visit "calendar"
     When I click "Create event"
      And I wait for AJAX to finish
      And I check the box "Add end date"
     When I press "Save"
     Then I should see "Title field is a required field."
      And I should see "The description is a required field."
      And I should see "You must supply a start date."

  @javascript
  Scenario: Testing event creation.
    Given I am logging in as "ClarkKent"
      And I visit "calendar"
      And I click "Create event"
      And I wait for AJAX to finish
      And I fill in "title" with "Dummy event"
      And I fill in the ckeditor "body" with "Dummy event content"
      And I fill in "date" with the date format "d/m/Y H:s"
     When I press "Save"
      And I wait for AJAX to finish
     Then I sleep for "2"
      And I should see "Dummy event content"
