define(function(require){


    return React.createClass({
        render: function(){
            return (
                <li className="message-list-item">
                    <h5 className="message-author-name">Bill</h5>
                    <div className="message-time">上午 10:33:33</div>
                    <div className="message-text">
                        Hey, are your kidding
                    </div>
                </li>
            )
        }
    })
})