function injectedScript() {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.id = 'EXTENSION-EXAMPLE';
  script.onload = function (e) {

  }
  script.src =  chrome.runtime.getURL('injected-script.js');

 (document.head || document.documentElement).appendChild(script);
}

injectedScript();
