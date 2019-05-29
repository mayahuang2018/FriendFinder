var friendsData = require("../data/friends");

module.exports = function(app) {
  // API GET Requests
  // A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
  // ---------------------------------------------------------------------------

  app.get("/api/firends", function(req, res) {
    res.json(firendsData);
  });

  // API POST Requests
  // A POST routes `/api/friends`. This will be used to handle incoming survey results. 
  // This route will also be used to handle the compatibility logic.
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

  //Convert each user's results into a simple array of numbers 
    var scoresArray = [];

  //compare the difference between current user's scores against those from other users
    var bestMatch = 0;

    for(var i=0;i<friendsData.length;i++){
      var diff = 0;

      //Remember to use the absolute value of the differences. 
      for(j=0;j<newFriend.scores.length;j++){
        diff = diff + (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(newFriend.scores[j])));
      }

      scoresArray.push(diff);
    }
     //The closest match will be the user with the least amount of difference
    for(var i=0;i<scoresArray.length;i++){
      if(scoresArray[i]<scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    var bff = friendsData[bestMatch];
    friendsData.push(newFriend);
      res.json(bff);
    
  });

}