define(function(require){
    var MessageStore = require("../stores/MessageStore");
    var ThreadStore = require("../stores/ThreadStore");
    var MessageListItem = require("./MessageListItem");

    return React.createClass({

        render: function(){
            var thread = ThreadStore.getCurrent();
            var messages = MessageStore.getAllForCurrentThread();

            var msgListItems = messages.map(function(message){
                return (
                    <MessageListItem
                        message={message}
                    />
                    )

            });

            return (
                <div className="message-section">
                    <h3 className="message-thread-heading">
                        {thread.name}
                    </h3>
                    <ul className="message-list">
                        {msgListItems}
                    </ul>
                    <textarea className="message-composer" name="message">
                    </textarea>
                </div>
            )
        }
    })

})