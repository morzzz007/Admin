var React = require('react');
var ClientsTable = require('./clients/clientstable.jsx');
var ClientsStore = require('./stores/clientsstore.jsx');
 
module.exports = React.createClass({
  mixins: [ClientsStore.mixin],
    getInitialState: function(){
        return { clients: ClientsStore.getClients() };
    },
    stateDidChange: function() {
        this.setState({ clients: ClientsStore.getClients() });
    },
    storeDidChange: function() {
        this.setState({ clients: ClientsStore.getClients() });
    },
  render: function(){
      return (
          <div>
            <h2>Clients</h2>
            <ClientsTable clients={this.state.clients}/>
          </div>
    );
    }
});