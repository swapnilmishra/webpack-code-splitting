require('./style.css');
var helper = require('./dep')

function bindButtonEvent() {
    var btn = document.getElementById('btn1')
    btn.addEventListener('click', function () {
        alert('clicked')
    })
}

bindButtonEvent()
helper.bindTextEvent()