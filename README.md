# webpack-code-splitting

Boilerplate to split code based on **require** using webpack.


**Use case**

1. This can be used in conjunction with a routing library to lazily load the code or can be loaded on an event.
2. If you are running service worker you can pretty much precache them for faster run time load.

Here _dep.js_ is asyncronously loading _asyncscript.js_ on click of button which can be seen from inspecting network tab.

**How to Run**

``
npm install && npm run build
``

Open _index.html_. Click on button _load script_.
