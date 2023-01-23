(function() {
 const currentScript = document.getElementById('EXTENSION-EXAMPLE');

  // The ID of the extension we want to talk to.
 const editorExtensionId = currentScript ? currentScript.dataset.extensionId : "";

 console.log('%cWeb Page: ', 'font-weight: bold; color: red; font-size: 30px');
 console.log('%cHi Extension!', 'font-weight: bold; font-size: 30px');
 // Make a simple request:
 chrome.runtime.sendMessage(editorExtensionId, {msg: 'Hi Extension!'},
   function(response) {
      if (response) {
        console.log('%cResponse from extension: ', 'font-weight: bold; color: green; font-size: 30px');
        console.log(`%c${response.msg}`, 'font-size: 30px');
      if (response.msg === 'Hey There! How are you?') {
        console.log('%cWeb Page: ', 'font-weight: bold; color: red; font-size: 30px');
        console.log('%cAll good, see you later!', 'font-size: 30px');

        chrome.runtime.sendMessage(editorExtensionId, {msg: 'All good, see you later!'}, function(secondResponse) {
          console.log('%cResponse from extension: ', 'font-weight: bold; color: green; font-size: 30px');
          console.log(`%c${secondResponse.msg}`, 'font-size: 30px');
        });
      }
      }
   });
})();
