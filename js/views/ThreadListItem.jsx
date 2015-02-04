define(function(){
    var i = 0;
    return React.createClass({

        render: function(){
            var thread = this.props.thread,
                lastMsg = thread.lastMessage,
                isCurrent = this.props.isCurrent;

            var className = (function(){
                var base = "thread-list-item";
                return isCurrent ? base + " active": base;
            })()

            return (
                <li className={className}>
                    <h5 className="thread-name">{thread.name}</h5>
                    <div className="thread-time">
                        {new Date(lastMsg.timestamp)}
                    </div>
                    <div className="thread-last-message">
                        {lastMsg.text}
                    </div>
                </li>
            )
        }
    })

})