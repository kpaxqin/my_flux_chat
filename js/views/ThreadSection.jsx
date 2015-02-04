define(function(require){
    var ThreadListItem = require("./ThreadListItem");
    var ThreadStore = require("../stores/ThreadStore");

    var getInitState = function(){
        return {
            threads : ThreadStore.getAllChrono(),
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
                    <ThreadListItem
                        key={thread.id}
                        thread = {thread}
                        isCurrent = {thread.id === self.state.currentId}
                    />
                )
            });

            return (
                <div className="thread-section">
                    <div className="thread-count">
                        <span>Unread threads: </span>
                        <span>{this.state.unreadCount}</span>
                    </div>

                    <ul className="thread-list">
                        {threadListItems}
                    </ul>
                </div>
            )

        }

    })

})