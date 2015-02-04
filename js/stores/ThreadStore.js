/**
 * Created by cdyf on 15-2-4.
 */
define(function(require){
    require("../utils/Utils");
    var Events = require("../utils/Events");

    var dispatcher = require("../dispatcher/chatDispatcher");

    var ChatMessageUtil = require("../utils/ChatMessageUtil");

    var Constants = require("../constants/Constants");
    var ACTION_TYPE = Constants.ACTION_TYPE;

    var _threads = {},
        _currentID;

    var ThreadStore = Object.assign({}, Events, {
        init: function(rawMessages){

            //转换得到threads
            rawMessages.forEach(function(message){
                var threadID = message.threadID;
                var thread = _threads[threadID];

                //thread已保存且当前message时间不是最新
                if (thread && thread.lastTimestamp > message.timestamp){
                    return;
                }
                _threads[threadID] = {
                    id: threadID,
                    name: message.threadName,
                    lastMessage: ChatMessageUtil.convertRawMessage(message),
                    lastTimestamp : message.timestamp
                }
            }, this);

            //计算current
            if (!_currentID){
                var sortedThreads = this.getAllChrono();
                _currentID = sortedThreads[sortedThreads.length - 1].id;
            }
        },
        getByID: function(id){
            return _threads[id];
        },
        getAll: function(){
            return _threads;
        },
        getAllChrono: function(){
            var result = [];

            for (var id in _threads){
                var thread = _threads[id];
                result.push(thread)
            }

            result.sort(function(a, b){
                if (a.lastMessage.timestamp < b.lastMessage.timestamp) {
                    return -1;
                } else if (a.lastMessage.timestamp > b.lastMessage.timestamp) {
                    return 1;
                }
                return 0;
            })

            return result;
        },
        getCurrent: function(){
            return this.getByID(_currentID);
        },
        getCurrentID: function(){
            return _currentID;
        },
        getUnreadCount: function(){
            return 3;//todo
        }
    });

    ThreadStore.dispatchToken = dispatcher.register(function(payload){
        var action = payload.action;

        switch (action.actionType){
            case ACTION_TYPE.RECEIVE_RAW_MESSAGE :
                ThreadStore.init(action.rawMessages);

                break;

            default :
        }
    });

    return ThreadStore;

})