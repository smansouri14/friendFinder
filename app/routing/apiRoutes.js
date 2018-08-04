var friends = require('../data/friends.js');

module.exports = function (app){
    //shows all friends in the friends array
     app.get("/api/friends", function(req, res) {
         res.json(friends);
     });

     //finds the friend thats the best match
     app.post("/api/friends", function(req, res) {
         var findFriend = {
             name: "",
             photo: "",
             friendDifference: 1000 
         };
         console.log(req.body);

         //take the results of the survey 
         var userData = req.body;
         var userScores = userData.scores;

         console.log(userScores);
 
         var scoreDiff = 0;

        //loops through all the possible friends
         for (var i = 0; i < friends.length; i++) {
             console.log(friends[i]);

             scoreDiff = 0;

            // loops through the scores of the friends     
             for (var j = 0; j < friends[i].scores[j]; j++) {
                 scoreDiff += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                // calculate the difference  between scores
                 if(scoreDiff <= findFriend.friendDifference) {
                     findFriend.name = friends[i].name;
                     findFriend.photo = friends[i].photo;
                     findFriend.friendDifference = scoreDiff;
                 }
             }
         }
         //sends data to the database 
         friends.push(userData);


         res.json(findFriend);
});
}