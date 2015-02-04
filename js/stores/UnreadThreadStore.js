define(function(require){
    require("../utils/Utils");
    var Events = require("../utils/Events");

    var dispatcher = require("../dispatcher/chatDispatcher");
    var ThreadStore = require("./ThreadStore");
    var MessageStore = require("./MessageStore");

    var Constants = require("../constants/Constants");
    var ACTION_TYPE = Constants.ACTION_TYPE;

    var UnreadThreadStore = Object.assign({}, Events, {
        getUnreadThreadCount: function(){
            var count = 0,
                _threads = ThreadStore.getAll();
            for (var id in _threads){
                var thread = _threads[id];

                if (!thread.lastMessage.isRead){
                    count++;
                }
            }

            return count;
        }
    });

    UnreadThreadStore.dispatchToken = dispatcher.register(function(payload){
        var action = payload.action;

        switch (action.actionType){
            case ACTION_TYPE.RECEIVE_RAW_MESSAGE:
                dispatcher.waitFor([ThreadStore.dispatchToken, MessageStore.dispatchToken])
                break;
        }
    })
    return UnreadThreadStore;
})