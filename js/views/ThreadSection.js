define(function(require){
    var ThreadListItem = require("./ThreadListItem");

    return React.createClass({
        render: function(){
            return (
                React.createElement("div", {className: "thread-section"}, 
                    React.createElement("div", {className: "thread-count"}, 
                        React.createElement("span", null, "Unread threads: "), 
                        React.createElement("span", null, "2")
                    ), 

                    React.createElement("ul", {className: "thread-list"}, 
                        React.createElement(ThreadListItem, null), 
                        React.createElement(ThreadListItem, null), 
                        React.createElement(ThreadListItem, null)
                    )
                )
            )

        }

    })

})