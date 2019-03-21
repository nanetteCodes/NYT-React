// Include React as a dependency
var React = require("react");

// Query Component Declaration
var Query = React.createClass({
  getInitialState: function() {
    return {
      search: "",
      start: "",
      end: ""
    };
  },

  handleChange: function(event) {
    //console.log("TEXT CHANGED");

    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  handleSubmit: function(event) {
    event.preventDefault();
    //console.log("CLICKED");
    this.props.updateSearch(
      this.state.search,
      this.state.start,
      this.state.end
    );
  },

  render: function() {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title text-center">Query</h1>
              </div>
              <div className="panel-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <h4 className="">
                      <strong>Topic</strong>
                    </h4>
                    <input
                      type="text"
                      value={this.state.search}
                      className="form-control"
                      id="search"
                      onChange={this.handleChange}
                      required
                    />

                    <h4>
                      <strong>Start Year</strong>
                    </h4>
                    <input
                      type="number"
                      value={this.state.start}
                      className="form-control"
                      id="start"
                      onChange={this.handleChange}
                      required
                    />

                    <h4>
                      <strong>End Year</strong>
                    </h4>

                    <input
                      type="number"
                      value={this.state.end}
                      className="form-control"
                      id="end"
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div className="pull-right">
                    <button type="submit" className="btn btn-info">
                      <h5>Submit</h5>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Query;
