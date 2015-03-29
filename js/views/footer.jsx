var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return null;
	},
 	render: function(){
    	return (
	      <footer className="main-footer">
	        <div className="pull-right hidden-xs">
	          <b>Version</b> 2.0
	        </div>
	        <strong>Copyright © 2014-2015 <a href="http://morz.hu">Morz</a>.</strong> All rights reserved.
	      </footer>
    	);
  	}
});