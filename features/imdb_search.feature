
Feature: IMDB-search
  
   Scenario Outline: Search for a movie using <actors_name>
   Given that I am on the IMDB website
   When I enter <actors_name> in a search field
   And I click the search button
   Then I find the corresponding <actors_name> in the search results

   Examples:
   | actors_name        | 
   | "Chevy Chase"      |
   | "Colin Firth"      | 

   
  

