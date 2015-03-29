var React = require('react');
 
module.exports = React.createClass({
	getInitialState: function () {
		return null;
	},
 	render: function(){
    	return (
      <header className="main-header">
        <a href="index2.html" className="logo"><b>Pooled</b> admin</a>
        <nav className="navbar navbar-static-top" role="navigation">
          <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </a>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img src="http://31.media.tumblr.com/avatar_ff20adb0f433_128.png" className="user-image" alt="User Image"/>
                  <span className="hidden-xs">Morz</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="user-header">
                    <img src="http://31.media.tumblr.com/avatar_ff20adb0f433_128.png" className="img-circle" alt="User Image" />
                    <p>
                      Morz - Web Developer
                      <small>Member since Nov. 2012</small>
                    </p>
                  </li>
                  <li className="user-footer">
                    <div className="pull-right">
                      <a href="#" className="btn btn-default btn-flat">Sign out</a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    	);
  	}
});