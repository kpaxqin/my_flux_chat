define(function(require){
    require("../utils/Utils");

    var Constants = require("../constants/Constants");

    var SOURCE_TYPE = Constants.ACTION_SOURCE_TYPE;

    var Dispatcher = Flux.Dispatcher;

    return Object.assign(new Dispatcher(), {
        handleServerAction: function(action){
            this.dispatch({
                source: SOURCE_TYPE.SERVER,
                action: action
            })
        },
        handleViewAction: function(action){
            this.dispatch({
                source: SOURCE_TYPE.USER_INTERACTION,
                action: action
            })
        }
    })


});