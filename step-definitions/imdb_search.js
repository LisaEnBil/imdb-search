
let { $, sleep } = require('./funcs');

let normalSleep = 1000;

module.exports = function () {

  this.Given(/^that I am on the IMDB website$/, async function () {
    await helpers.loadPage('https://imdb.com');
    await sleep(normalSleep);
    let logo = await $('#home_img_holder');
    assert(logo, "Expected the IMDB logo");
  });

  this.When(/^I enter "([^"]*)" in a search field$/, async function (actorsName) {

    let searchField = await $('#suggestion-search');
    await searchField.sendKeys(actorsName);
    await sleep(normalSleep);
  });

  this.When(/^I click the search button$/, async function () {

    let searchButton = await $('#suggestion-search-button');
    await searchButton.click();
    await sleep(normalSleep);

  });

  this.Then(/^I find the corresponding "([^"]*)" in the search results$/, async function (searchString) {

    let results = await $('div:nth-child(3) > table > tbody > tr > td.result_text');

    let found = false;
    //console.log("hitta koden", result);
    for (let result of results) {
      console.log("TEXT", result.getText());
      let text = await result.getText();

      if (text.toLowerCase().includes(searchString.toLowerCase())) {
        found = true;
        break;
      }
    }
    assert(found, 'expected to find ' + searchString)

  });

}