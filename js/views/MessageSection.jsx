define(function(require){

    var MessageListItem = require("./MessageListItem");

    return React.createClass({
        render: function(){
            return (
                <div className="message-section">
                    <h3 className="message-thread-heading">
                        thread title
                    </h3>
                    <ul className="message-list">
                        <MessageListItem />
                        <MessageListItem />

                    </ul>
                    <textarea className="message-composer" name="message">
                    </textarea>
                </div>
            )
        }
    })

})