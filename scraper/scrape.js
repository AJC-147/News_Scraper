var axios = require("axios");
var cheerio = require("cheerio");

var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

var databaseUrl = "scraper";
var collections = ["scrapedData"];

var scrape = function() {

  return axios.get("http://www.washingtonpost.com/").then(function(res) {

    var $ = cheerio.load(res.data);

    var articles = [];

    $("div.headline").each(function(i, element) {

      var head = $(element).children("a").text();
      var link = $(element).children("a").attr("href");

      if (link && url) {

        db.scrapedData.insert({
          header: head,
          url: ink

        },
        function(err, inserted) {
          if (err) {
            console.log(err + "---db err");

          }
          else {
            console.log(inserted);
          }
        }
      );
      }
    })
  })
  res.send("scraped");

}
