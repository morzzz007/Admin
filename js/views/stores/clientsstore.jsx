var McFly = require('McFly');

var Flux = new McFly();

_clients =  [
    {name: "First Client", date: "2015.03.29", recruitments: 12},
    {name: "Second Client", date: "2015.03.29", recruitments: 5}
];

function addClient(text){
    _clients.push(text);
}

var ClientsStore = Flux.createStore({
    getClients: function(){
       return _clients;
    }
}, function(payload){
    if(payload.actionType === "ADD_RECIPE") {
        addClient(payload.text);
        ClientsStore.emitChange();
    }
});

module.exports = ClientsStore;