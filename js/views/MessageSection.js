define(function(require){

    var MessageListItem = require("./MessageListItem");

    return React.createClass({
        render: function(){
            return (
                React.createElement("div", {className: "message-section"}, 
                    React.createElement("h3", {className: "message-thread-heading"}, 
                        "thread title"
                    ), 
                    React.createElement("ul", {className: "message-list"}, 
                        React.createElement(MessageListItem, null), 
                        React.createElement(MessageListItem, null)

                    ), 
                    React.createElement("textarea", {className: "message-composer", name: "message"}
                    )
                )
            )
        }
    })

})