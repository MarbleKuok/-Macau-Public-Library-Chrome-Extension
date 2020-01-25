// chrome.contextMenus.create({
//     'type':'normal',
//     'title':'查找澳門公共圖書館',
//     'contexts':['selection'],
//     'id':'cn',
//     'onclick':check
// });

// function check(info, tab){
//   var creating = browser.tabs.create({
//   url:'https://webpac.library.gov.mo/client/zh_TW/webpac/search/results?qu='+info.selectionText
//   });
// }

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
//     browser.contextMenus.update('cn',{
//         'title':'在澳門公共圖書館中查找“'+message+'”'
//     });
// });


chrome.contextMenus.create({
  title: '在澳門公共圖書館中查找：%s', 
  contexts: ['selection'], 
  onclick: function(params)
  {
      chrome.tabs.create({url: 'https://webpac.library.gov.mo/client/zh_TW/webpac/search/results?qu=' + encodeURI(params.selectionText)});
  }
});