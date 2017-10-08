// Include React as a dependency
var React = require("react");

// Include the Helper (for the saved recall)
var helpers = require("../utils/helpers");

// Create the Main component
var Main = React.createClass({

  getInitialState: function() {
    return { savedArticles: "" };
  },


  componentDidMount: function() {
    helpers.getSaved().then(function(articleData) {
      this.setState({ savedArticles: articleData.data });
      console.log("saved results", articleData.data);
    }.bind(this));
  },


  handleClick: function(item) {
    console.log("CLICKED");
    console.log(item);

    helpers.deleteSaved(item.title, item.date, item.url).then(function() {

      // Get the revised list!
      helpers.getSaved().then(function(articleData) {
        this.setState({ savedArticles: articleData.data });
        console.log("saved results", articleData.data);
      }.bind(this));

    }.bind(this));
  },

  renderEmpty: function() {
    return (
      <li className="list-group-item">
        <h3>
          <span>
            <em>Save an Article</em>
          </span>
        </h3>
      </li>
    );
  },


  renderArticles: function() {
    return this.state.savedArticles.map(function(article, index) {

      return (
        <div key={index}>
          <li className="list-group-item">
            <h3>
              <span>
                <em>{article.title}</em>
              </span>
              <span className="btn-group pull-right">
                <a href={article.url} rel="noopener noreferrer" target="_blank">
                  <button className="btn btn-info ">View</button>
                </a>
                <button className="btn btn-default" onClick={() => this.handleClick(article)}>Delete</button>
              </span>
            </h3>
            <p>Date Published: {article.date}</p>
          </li>
        </div>
      );
    }.bind(this));
  },


  renderContainer: function() {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title text-center">
                    <i className="fa fa-download" aria-hidden="true"></i> Saved Articles
                </h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {this.renderArticles()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },

  render: function() {
    if (!this.state.savedArticles) {
      return this.renderEmpty();
    }
    return this.renderContainer();
  }
});

// Export the module back to the route
module.exports = Main;
