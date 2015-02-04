/**
 * Created by cdyf on 15-2-4.
 */
define(function(require){
    var ServerActionCreator = require("../actions/ChatServerActionCreator");

    return {
        getAllMessage: function(){
            var msgStr = localStorage.getItem("messages"),
                messages = JSON.parse(msgStr);

            ServerActionCreator.receiveAll(messages);
        }
    }
})