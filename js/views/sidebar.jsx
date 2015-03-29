var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
	getInitialState: function () {
		return null;
	},
 	render: function(){
    	return (
        <aside className="main-sidebar">
          <section className="sidebar">
            <ul className="sidebar-menu">
              <li className="header">MAIN NAVIGATION</li>
              <li>
                <Link to="clients">
                  <i className="fa fa-users"></i> <span>Clients</span>
                </Link>
                <Link to="admins">
                  <i className="fa fa-user-secret"></i> <span>Admins</span>
                </Link>
              </li>            
            </ul>
          </section>
        </aside>
    	);
  	}
});