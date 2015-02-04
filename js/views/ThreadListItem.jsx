define(function(){
    var i = 0
    return React.createClass({

        render: function(){

            return (
                <li className="thread-list-item">
                    <h5 className="thread-name">test_{i++}</h5>
                    <div className="thread-time">
                         2014-12-12
                    </div>
                    <div className="thread-last-message">
                         testestsets
                    </div>
                </li>
            )
        }
    })

})