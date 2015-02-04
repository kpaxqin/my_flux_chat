/**
 * Created by cdyf on 15-2-4.
 */
define(function(require){
    var Events = require("../utils/Events");
    require("../utils/Utils");

    var _threads;

    var ThreadStore = Object.assign({}, Events, {
        init: function(){
            _threads = [
                {
                    id: "t_1",
                    name: "Jing and Bill",
                    lastMessage: {
                        id: 'm_2',
                        threadID: 't_1',
                        threadName: 'Jing and Bill',
                        authorName: 'Bill',
                        text: 'Seems like a pretty cool conference.',
                        timestamp: Date.now() - 89999,
                        isRead : true
                    }
                },
                {
                    id: "t_2",
                    name: "Dave and Bill",
                    lastMessage: {
                        id: 'm_2',
                        threadID: 't_2',
                        threadName: 'Dave and Bill',
                        authorName: 'Dave',
                        text: 'Seems like a pretty cool conference.',
                        timestamp: Date.now() - 89999,
                        isRead : true
                    }
                }
            ]
        },
        getAll: function(){
            return _threads;
        },
        getCurrent: function(){
            return _threads[1];
        },
        getCurrentID: function(){
            return "t_2";
        },
        getUnreadCount: function(){
            return 1;
        }
    });

    ThreadStore.init();

    return ThreadStore;

})