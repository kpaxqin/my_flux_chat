define(function(require){
    require("../utils/Utils");

    var Dispatcher = Flux.Dispatcher;

    return Object.assign(new Dispatcher(), {
        handleServerAction: function(action){
            this.dispatch({
                source: "server",
                action: action
            })
        }
    })


});