function bindTextEvent() {
    var text = document.getElementById('text1')
    text.addEventListener('focus', function () {
        var load = require("bundle?lazy!./asyncscript.js")
        load(function(asyncscript){
            console.log(asyncscript.hello())
        })
    })
}

module.exports = {
    bindTextEvent: bindTextEvent
}