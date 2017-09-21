// Include React
var React = require("react");
// Here we include all of the sub-components
var Results = require("./Results");
var Search = require("./Search");
// Create the Child Component
var Main = React.createClass({
  render: function() {
    return (
      <div className="container">
        {/* <!-- Jumbotron for Title --> */}
        <div className="jumbotron">
          <h1 className="text-center">
            <strong>
              <i className="fa fa-newspaper-o"></i>
              New York Times Search</strong>
          </h1>
        </div>
        <Search/>
      </div>
    );
  }
});
module.exports = Main;
