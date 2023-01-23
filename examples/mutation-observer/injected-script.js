(function() {
  document.getElementById('cool-btn').addEventListener('click', () => {
    // Grabbing our script tag.
    const ourScriptTag = document.getElementById('DEBUGGER');
    const newMessage = 'Hi extension!';
    // Updating `data-msg-to-extension` attribute value from '' to 'hello extension'
    ourScriptTag.dataset.msgToExtension = newMessage;
  });


  /*
    We are going to listen to any update the `data-msg-to-page` has
  */
  const observer = new MutationObserver(function(mutations) {
    /*
        Check what Mutation object type looks like:
        https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.mutationrecord.html

        --------------------------------------

        We are going to loop through each mutation and grab only the
        attribute we care about (data-msg-to-page).
        and console log it's value.
    */
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === 'data-msg-to-page') {
        const scriptTag = mutation.target;
        const msgToPage = scriptTag.getAttribute(mutation.attributeName);

        console.log('%cMESSAGE FROM EXTENSION: ', 'font-weight: bold; color: red; font-size: 30px');
        console.log(`%c${msgToPage}`, 'font-size: 30px');
        // Outout: "Hello page"
      }
    });
  });

  // Notify me attributes changing
  var observerConfig = {
    attributes: true
  };

  // Grab the script tag that exist on the page
  const targetNode = document.getElementById('DEBUGGER');

  // Lets make sure our script exists on the page
  if (targetNode) {
    observer.observe(targetNode, observerConfig);
  }
})();
