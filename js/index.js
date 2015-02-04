/**
 * Created by cdyf on 15-2-4.
 */
define(function(require){
    var IndexView = require("./views/index");

    var WebAPIUtils = require("./utils/WebAPIUtils");

    return {
        init: function(){
            WebAPIUtils.getAllMessage();

            React.render(
                React.createElement(IndexView, null),
                document.getElementById("chat")
            )
        }
    }

});