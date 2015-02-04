define(function(require){
    var ThreadListItem = require("./ThreadListItem");

    return React.createClass({
        render: function(){
            return (
                <div className="thread-section">
                    <div className="thread-count">
                        <span>Unread threads: </span>
                        <span>2</span>
                    </div>

                    <ul className="thread-list">
                        <ThreadListItem />
                        <ThreadListItem />
                        <ThreadListItem />
                    </ul>
                </div>
            )

        }

    })

})