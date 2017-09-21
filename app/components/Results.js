// Include React
var React = require("react");

// Create the Child Component
var Results = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <br/>
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
            </div>
            <div className="panel-body" id="well-section">
            </div>
          </div>
        </div>
      </div>
    );
  }
});
module.exports = Results;
