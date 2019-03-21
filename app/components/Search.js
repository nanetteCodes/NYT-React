// Include React as a dependency
var React = require("react");

// Include the Query and Results components
var Query = require("./search/Query");
var Results = require("./search/Results");

// Include the helpers for making API calls
var helpers = require("../utils/helpers");

// Create the Search component
var Search = React.createClass({
  getInitialState: function() {
    return {
      results: {}
    };
  },

  setQuery: function(newQuery, newStart, newEnd) {
    helpers.runQuery(newQuery, newStart, newEnd).then(
      function(data) {
        this.setState({ results: { docs: data.docs } });
      }.bind(this)
    );
  },

  render: function() {
    //console.log("Render Results", this.state.results);

    return (
      <div className="main-container">
        <Query updateSearch={this.setQuery} />

        <Results results={this.state.results} />
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Search;
