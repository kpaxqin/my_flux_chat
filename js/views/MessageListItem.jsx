define(function(require){


    return React.createClass({
        render: function(){
            var msg = this.props.message;

            return (
                <li className="message-list-item">
                    <h5 className="message-author-name">{msg.authorName}</h5>
                    <div className="message-time">{new Date(msg.timestamp)}</div>
                    <div className="message-text">
                        {msg.text}
                    </div>
                </li>
            )
        }
    })
})