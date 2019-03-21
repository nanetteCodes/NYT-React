// Include the Axios library for HTTP requests
var axios = require("axios");

// NYT API Key (Replace with your own API Key)
var APIKey = "cujFG4ALQLdytAb1Qr7Ccn9QjR5IATv7";

// Helper Functions
var helpers = {
  // This will run our query.
  runQuery: function(term, start, end) {
    // Adjust to get search terms in proper format
    var formattedTerm = term.trim();
    var formattedStart = start.trim() + "0101";
    var formattedEnd = end.trim() + "1231";

    // console.log("Query Run");

    return axios
      .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
        params: {
          "api-key": APIKey,
          q: formattedTerm,
          begin_date: formattedStart,
          end_date: formattedEnd
        }
      })
      .then(function(results) {
        //  console.log("Axios Results", results.data.response);
        return results.data.response;
      });
  },

  getSaved: function() {
    return axios.get("/api/saved").then(function(results) {
      //  console.log("axios results", results);
      return results;
    });
  },
  postSaved: function(title, date, url) {
    var newArticle = { title: title, date: date, url: url };
    return axios.post("/api/saved", newArticle).then(function(response) {
      //  console.log("axios results", response.data._id);
      return response.data._id;
    });
  },

  deleteSaved: function(title, data, url) {
    return axios
      .delete("/api/saved", {
        params: {
          title: title,
          data: data,
          url: url
        }
      })
      .then(function(results) {
        //  console.log("axios results", results);
        return results;
      });
  }
};

// We export the helpers function
module.exports = helpers;
