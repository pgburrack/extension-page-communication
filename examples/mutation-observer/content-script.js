function injectButton() {
  const button = document.createElement('button');
  button.id = 'cool-btn';
  button.innerText = 'Say hi to our chrome extension!';

  (document.body).appendChild(button);
}

function injectedScript() {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.id = 'DEBUGGER';
  script.dataset.msgToExtension = '';
  script.dataset.msgToPage = '';

  script.onload = function (e) {
    observeChanges();
  }
  script.src =  chrome.runtime.getURL('injected-script.js');

 (document.head || document.documentElement).appendChild(script);
}

injectButton();
injectedScript();

function observeChanges () {
  const observer = new MutationObserver(function(mutations) {
    /*
       Check what Mutation object type looks like:
       https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.mutationrecord.html
    */
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === 'data-msg-to-extension') {
        const scriptTag = mutation.target;
        const msgToExtension = scriptTag.getAttribute(mutation.attributeName);
        console.log('IN EXTENSION: ', msgToExtension);
        if (msgToExtension === 'hello extension') {
          const newMessage = 'hello page';
          /*
            Send a message back to the page
          */
          scriptTag.dataset.msgToPage = newMessage;
        }
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
}
