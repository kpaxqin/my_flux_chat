/**
 * Created by cdyf on 15-2-5.
 */
define(function(require){
    var dispatcher = require("../dispatcher/chatDispatcher");

    var MessageStore = require("../stores/MessageStore");
    var ThreadStore = require("../stores/ThreadStore");

    var WebAPIUtils = require("../utils/WebAPIUtils");

    var Constants = require("../constants/Constants");

    var ACTION_TYPE = Constants.ACTION_TYPE;

    return {
        threadClick: function(thread){
            dispatcher.handleViewAction({
                actionType: ACTION_TYPE.THREAD_CLICK,
                thread: thread
            });
        },
        createMessage: function(text){
            var message = MessageStore.getCreatedMessage(text);

            dispatcher.handleViewAction({
                actionType: ACTION_TYPE.CREATE_MESSAGE,
                message: message
            });
            WebAPIUtils.addMessage(message, ThreadStore.getCurrent());

        }
    }
});