var path = require('path');

module.exports = function (app) {
// takes the user to the survey
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });


//puts them on the home page if the above page isnt entered in 
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

} 