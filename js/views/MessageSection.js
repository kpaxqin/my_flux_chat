define(function(require){
    var MessageStore = require("../stores/MessageStore");
    var ThreadStore = require("../stores/ThreadStore");
    var MessageListItem = require("./MessageListItem");
    var MessageComposer = require("./MessageComposer");

    return React.createClass({

        _onChange: function(){
            this.forceUpdate();
        },
        componentDidMount: function() {
            MessageStore.on("change", this._onChange, this);
        },

        componentWillUnmount: function() {
            MessageStore.off("change", this._onChange);
        },

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
                    React.createElement(MessageComposer, null)
                )
            )
        }
    })

})