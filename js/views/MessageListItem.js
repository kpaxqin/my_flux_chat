define(function(require){


    return React.createClass({
        render: function(){
            var msg = this.props.message;

            return (
                React.createElement("li", {className: "message-list-item"}, 
                    React.createElement("h5", {className: "message-author-name"}, msg.authorName), 
                    React.createElement("div", {className: "message-time"}, new Date(msg.timestamp)), 
                    React.createElement("div", {className: "message-text"}, 
                        msg.text
                    )
                )
            )
        }
    })
})