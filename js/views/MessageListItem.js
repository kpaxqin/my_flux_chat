define(function(require){


    return React.createClass({
        render: function(){
            return (
                React.createElement("li", {className: "message-list-item"}, 
                    React.createElement("h5", {className: "message-author-name"}, "Bill"), 
                    React.createElement("div", {className: "message-time"}, "上午 10:33:33"), 
                    React.createElement("div", {className: "message-text"}, 
                        "Hey, are your kidding"
                    )
                )
            )
        }
    })
})