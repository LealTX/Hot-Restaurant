const reservations = require('./../data/characters');

module.exports = function(app){
    // Displays all reservations
    app.get("/api/reservations", function(req, res) {
        return res.json(reservations);
    });
    
        
    // Create New Characters - takes in JSON input
    app.post("/api/reservations", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
       const newReservation = req.body;
    
        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
    
        console.log(newReservation);
    
        reservations.push(newReservation);
    
        res.json(newReservation);
    });
};