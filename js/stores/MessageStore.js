/**
 * Created by cdyf on 15-2-4.
 */
define(function(require){
    require("../utils/Utils");
    var Events = require("../utils/Events");

    var _messages = [];

    var MessageStore = Object.assign({}, Events, {
        init: function(){
            _messages = [{
                id: 'm_2',
                threadID: 't_1',
                authorName: 'Jing',
                text: 'Jing Jing Jing Jing Jing.',
                timestamp: Date.now() - 89999,
                isRead : true
            },{
                id: 'm_2',
                threadID: 't_1',
                authorName: 'Bill',
                text: 'Seems like a pretty cool conference.',
                timestamp: Date.now() - 89999,
                isRead : true
            }]
        },
        getAll: function(){
            return _messages;
        },
        getAllForCurrentThread: function(){
            return _messages;
        }
    });

    MessageStore.init();

    return MessageStore;
})