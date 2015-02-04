define(function(){
    var i = 0
    return React.createClass({

        render: function(){

            return (
                React.createElement("li", {className: "thread-list-item"}, 
                    React.createElement("h5", {className: "thread-name"}, "test_", i++), 
                    React.createElement("div", {className: "thread-time"}, 
                         "2014-12-12"
                    ), 
                    React.createElement("div", {className: "thread-last-message"}, 
                         "testestsets"
                    )
                )
            )
        }
    })

})