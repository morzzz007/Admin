var React = require('react');
var Client = require('./client.jsx')

module.exports = React.createClass({
  render: function(){

	var clientNodes = this.props.clients.map(function(client, index){
		return (
			<Client
				key={index}
				name={client.name}
				date={client.date}
				recruitments={client.recruitments} />
		)
	});

    return (
    	<div className="row">
            <div className="col-xs-12">
              	<div className="box">
                	<div className="box-header">
                  		<h3 className="box-title">Clients</h3>
                	</div>
                	<div className="box-body table-responsive no-padding">
                  		<table className="table table-hover">
                    		<tbody>
                    			{clientNodes}
							</tbody>
						</table>
                	</div>
              	</div>
            </div>
      	</div>
    );
  }
});