// Include React
var React = require("react");
var Results = require("./Results");

// Create the Child Component
var Search = React.createClass({
  render: function() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <br/>
              {/* <!-- First panel is for handling the search parameters --> */}
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    <strong>
                      <i className="fa  fa-list-alt"></i>
                      Search Parameters</strong>
                  </h3>
                </div>
                <div className="panel-body">

                  {/* <!-- Here we create an HTML Form for handling the inputs--> */}
                  <form role="form">

                    {/* <!-- Here we create the text box for capturing the search term--> */}
                    <div className="form-group">
                      <label htmlFor="search">Search Term:</label>
                      <input type="text" className="form-control" id="search-term"/>

                    </div>

                      {/* <!-- Here we capture the number of records that the user wants to retrieve  --> */}
                      <div className="form-group">
                        <label htmlFor="pwd">Number of Records to Retrieve:</label>
                        <select className="form-control" id="num-records-select">
                          <option value="1">1</option>
                          {/* <!-- Setting the option for 5 as default --> */}
                          <option value="5" selected>5</option>
                          <option value="10">10</option>
                        </select>
                      </div>

                      {/* <!-- Here we capture the Start Year Parameter--> */}
                      <div className="form-group">
                        <label htmlFor="start-year">Start Year (Optional):</label>
                        <input type="text" className="form-control" id="start-year"/>

                      </div>

                        {/* <!-- Here we capture the End Year Parameter --> */}
                        <div className="form-group">
                          <label htmlFor="end-year">End Year (Optional):</label>
                          <input type="text" className="form-control" id="end-year"/>

                        </div>
                          <button type="submit" className="btn btn-default" id="run-search">
                            <i className="fa fa-search"></i>
                            Search</button>
                          <button type="button" className="btn btn-default" id="clear-all">
                            <i className="fa fa-trash"></i>
                            Clear Results</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Results/>
        </div>
      );
    }
  });
module.exports = Search;
