import axios from "axios";
var cheerio = require("cheerio");
export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },

  // ===========================================================

  searchStock: function (time, company) {
    var key = "Y630EXU2OC7ZDZ1G"
    var stockDataString = "https://www.alphavantage.co/query?function=" + time + "&symbol=" + company + "&apikey=" + key

    return axios.get(stockDataString)
  },

scrape: function(){
 return axios.get("https://www.nytimes.com/topic/subject/finances")
//   .then(function(response){
//   var $ = cheerio.load(response.data);
//   $("div").each(function(i, element) {
//     // Save an empty result object
//     var result = {};

//     // Add the text and href of every link, and save them as properties of the result object
//     result.title = $(this)
//       .children().children("h2")
//       .text();
//       console.log(result)
//     result.link = $(this)
//       .children("a")
//       .attr("href");
//       return result;
//   });
// });
}

};
