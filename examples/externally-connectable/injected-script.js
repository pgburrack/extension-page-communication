(function() {
  // The ID of the extension we want to talk to.
 const editorExtensionId = "nbkdlcdkeijbpgfmbgnhaekaolkiphha";

 console.log('%cWeb Page: ', 'font-weight: bold; color: red', 'Hi Extension!');
 // Make a simple request:
 chrome.runtime.sendMessage(editorExtensionId, {msg: 'Hi Extension!'},
   function(response) {
      console.log('%cResponse from extension: ', 'font-weight: bold; color: green', response.msg);
      if (response.msg === 'Hey There! How are you?') {
        console.log('%cWeb Page: ', 'font-weight: bold; color: red', 'All good, see you later!');
        chrome.runtime.sendMessage(editorExtensionId, {msg: 'All good, see you later!'}, function(secondResponse) {
          console.log('%cResponse from extension: ', 'font-weight: bold; color: green', secondResponse.msg);
        });
      }

   });
})();
