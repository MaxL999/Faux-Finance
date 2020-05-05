import axios from "axios";
var cheerio = require("cheerio");
export default {
  getStocks: function () {
    return axios.get("/stocks")
  },
  getStock: function (id) {
    return axios.get("/stocks/"+id)
  },

  buyStock: function (data) {
    return axios.post("/stocks", data)
  },
  
  registerUser: function (data) {
    return axios.post("/auth/register", data)
  },
  loginUser: function (data) {
    return axios.post("/auth/login", data)
  },
  logoutUser: function(){
    return axios.post("/auth/logout")
  },

  searchStock: function (time, company) {
    var key = "Y630EXU2OC7ZDZ1G"
    var stockDataString = "https://www.alphavantage.co/query?function=" + time + "&symbol=" + company + "&apikey=" + key

    return axios.get(stockDataString)
  },

scrape: function(){
 return axios.get("/api/scrape");
}

<<<<<<< HEAD
};
=======
};
>>>>>>> 70a08d67d77cb6601b9493bbca3fea1ba412c663
