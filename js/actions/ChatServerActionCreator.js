/**
 * Created by cdyf on 15-2-4.
 */
define(function(require){
    var dispatcher = require("../dispatcher/chatDispatcher");

    var Constants = require("../constants/Constants");

    var ACTION_TYPE = Constants.ACTION_TYPE;

    return {
        receiveAll: function(msgs){
            dispatcher.handleServerAction({
                actionType: ACTION_TYPE.RECEIVE_RAW_MESSAGE,
                rawMessages: msgs
            });
        }
    }
});