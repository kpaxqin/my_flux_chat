/**
 * Created by cdyf on 15-2-4.
 */
define(function(require){
    require("../utils/Utils");
    var Events = require("../utils/Events");

    var ChatMessageUtil = require("../utils/ChatMessageUtil");
    var ThreadStore = require("./ThreadStore");
    var dispatcher = require("../dispatcher/chatDispatcher");
    var Constants = require("../constants/Constants");
    var ACTION_TYPE = Constants.ACTION_TYPE;

    var _messages = {};

    function _addMessages(raws){
        raws.forEach(function(msg){
            _messages[msg.id] = ChatMessageUtil.convertRawMessage(msg);
        }, this)
    }

    function _markReadByThread(threadID){
        for (var id in _messages){
            var msg = _messages[id];
            if (msg.threadID === threadID){
                msg.isRead = true;
            }
        }
    }

    var MessageStore = Object.assign({}, Events, {
        getAll: function(){
            return _messages;
        },
        getAllForCurrentThread: function(){
            var currendThreadID = ThreadStore.getCurrentID();
            var result = [];

            for (var id in _messages){
                var msg = _messages[id];

                if (msg.threadID === currendThreadID){
                    result.push(msg)
                }
            }

            return result;
        }
    });

    MessageStore.dispatchToken = dispatcher.register(function(payload){
        var action = payload.action;

        switch (action.actionType){
            case ACTION_TYPE.RECEIVE_RAW_MESSAGE :
                _addMessages(action.rawMessages);
                dispatcher.waitFor([ThreadStore.dispatchToken]);
                _markReadByThread(ThreadStore.getCurrentID());
                break;

            default :
        }
    });

    return MessageStore;
})