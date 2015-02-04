/**
 * Created by cdyf on 15-2-4.
 */
define(function(require){
    var IndexView = require("./views/index");

    return {
        init: function(){

            React.render(
                React.createElement(IndexView, null),
                document.getElementById("chat")
            )
        }
    }

});