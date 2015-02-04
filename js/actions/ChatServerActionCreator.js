/**
 * Created by cdyf on 15-2-4.
 */
define(function(require){
    var dispatcher = require("../dispatcher/chatDispatcher");

    return {
        receiveAll: function(msgs){
            dispatcher.handleServerAction({
                actionType: 1,
                messages: msgs
            });
        }
    }
});