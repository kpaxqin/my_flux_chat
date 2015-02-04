define(function(require){
    var ThreadListItem = require("./ThreadListItem");
    var ThreadStore = require("../stores/ThreadStore");

    var getInitState = function(){
        return {
            threads : ThreadStore.getAll(),
            currentId: ThreadStore.getCurrentID(),
            unreadCount: ThreadStore.getUnreadCount()
        }
    }

    return React.createClass({
        getInitialState: function(){
            return getInitState();
        },
        render: function(){
            var self = this;
            var threadListItems = this.state.threads.map(function(thread){
                return (
                    React.createElement(ThreadListItem, {
                        key: thread.id, 
                        thread: thread, 
                        isCurrent: thread.id === self.state.currentId}
                    )
                )
            });

            return (
                React.createElement("div", {className: "thread-section"}, 
                    React.createElement("div", {className: "thread-count"}, 
                        React.createElement("span", null, "Unread threads: "), 
                        React.createElement("span", null, this.state.unreadCount)
                    ), 

                    React.createElement("ul", {className: "thread-list"}, 
                        threadListItems
                    )
                )
            )

        }

    })

})