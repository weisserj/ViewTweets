// chrome.browserAction.onClicked.addListener(function(activeTab) {
//     chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
//         var newURL = tabs[0].url;
//         var searchTwitter = "https://twitter.com/search?q=" + newURL;
//         chrome.tabs.create({ url: searchTwitter });
//     });
// });

chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var stemUrl = "https://twitter.com/search?vertical=default&q=";
    var viewTweet = chrome.tabs.create({ url: (stemUrl + activeTab.url) });
});