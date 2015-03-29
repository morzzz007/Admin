var React = require('react');
var Router = require('react-router');
var Navbar = require('./views/navbar.jsx');
var Sidebar = require('./views/sidebar.jsx');
var Footer = require('./views/footer.jsx');
var ClientsList = require('./views/clientslist.jsx');
var AdminsList = require('./views/adminslist.jsx');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
	    <div className="wrapper">
	        <Navbar/>
      		<Sidebar/>
			<div className="content-wrapper">
				<section className="content">
					<RouteHandler/>
				</section>
			</div>
	        <Footer/>
	    </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="clients" handler={ClientsList}/>
    <Route name="admins" handler={AdminsList}/>
    <DefaultRoute handler={ClientsList}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});