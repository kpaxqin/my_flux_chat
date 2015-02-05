define(function(require){
    var ThreadListItem = require("./ThreadListItem");
    var ThreadStore = require("../stores/ThreadStore");
    var UnreadThreadStore = require("../stores/UnreadThreadStore");

    var ViewActionCreator = require("../actions/ChatViewActionCreator");

    var getInitState = function(){
        return {
            threads : ThreadStore.getAllChrono(),
            currentId: ThreadStore.getCurrentID(),
//            unreadCount: UnreadThreadStore.getUnreadThreadCount()
            unreadCount: ThreadStore.getUnreadCount()
        }
    }


    var ThreadSection =  React.createClass({displayName: 'ThreadSection',
        getInitialState: function(){
            return getInitState();
        },
        _onChange: function(){
            this.setState(getInitState());
        },
        componentDidMount: function() {
            ThreadStore.on("change", this._onChange, this);
            UnreadThreadStore.on("change", this._onChange, this);
        },

        componentWillUnmount: function() {
            ThreadStore.off("change", this._onChange);
            UnreadThreadStore.off("change", this._onChange);
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

    });

    return ThreadSection;
})