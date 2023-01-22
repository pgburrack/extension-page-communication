
chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    console.log(request, sender, sendResponse);
    if (request.msg === 'Hi Extension!') {
      sendResponse({msg: 'Hey There! How are you?'});
    } else if (request.msg === 'All good, see you later!') {
      sendResponse({msg: 'Have a nice day!'});
    }
  });
