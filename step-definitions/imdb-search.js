let {$, sleep} = require('./funcs');

module.exports = function() {

    this.Given(/^that I am on the IMDB website$/, async function () {
       await helpers.loadPage('https://imdb.com');
       await sleep(1000);
       let logo = await $('#home_img_holder');
       assert(logo, "Expected the IMDB logo");
    });


    this.When(/^I enter the "([^"]*)" a search field$/, function (movieTitle) {
       
      let searchField = await $('#suggestion-search');
      await searchField.sendKeys(movieTitle);
      await sleep(5000);

    });

    this.When(/^I click the search button$/, function () {
       
     });

    this.Then(/^I find the corresponding "([^"]*)" in the search results$/, function () {
       
      });


}