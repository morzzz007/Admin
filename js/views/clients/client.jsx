var React = require('react');

module.exports = React.createClass({
  getInitialState: function () {
		console.log('getInitialState: ',this.props)
		return null;
	},
  render: function(){
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.date}</td>
        <td>{this.props.recruitments}</td>
      </tr>
    );
 }
});