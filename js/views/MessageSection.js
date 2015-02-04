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
                    React.createElement(MessageListItem, {
                        message: message}
                    )
                    )

            });

            return (
                React.createElement("div", {className: "message-section"}, 
                    React.createElement("h3", {className: "message-thread-heading"}, 
                        thread.name
                    ), 
                    React.createElement("ul", {className: "message-list"}, 
                        msgListItems
                    ), 
                    React.createElement("textarea", {className: "message-composer", name: "message"}
                    )
                )
            )
        }
    })

})