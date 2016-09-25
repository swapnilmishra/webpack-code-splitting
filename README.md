# webpack-code-splitting

Boilerplace to split code basis **require** using webpack.

This can be used in conjunction with a routing library to lazily load the code or can be loaded on an event.

Here _dep.js_ is asyncronously loading _asyncscript.js_ on click of button which can be seen from inspecting network tab.

**How to Run**

``
npm install && npm run build
``

Open _index.html_. Click on button _load script_.
