var locationsArray = ['kitchen', 'bedroom', 'den', 'living room', 'pantry', 'closet', 'garage', 'front yard', 'attic', 'library'];
var weaponsArray = ['knife', 'spoon', 'fork', 'spatula', 'toaster', 'brick', 'wiffle ball bat', 'drumstick', 'tea cup', 'battle axe', 'broomstick', 'universal remote', 'frying pan', 'tire iron', 'football', 'ping pong paddle', 'car keys', 'shovel', 'hamster', 'tennis racquet'];
var friendsArray = ['Chase', 'Katie', 'Devonte', 'Ryan', 'Emil'];

for (var i = 0; i < 100; i++) {
    var newH3 = $("<h3>" + 'Accusation ' + (i+1) + "</h3>");
    $('body').append(newH3);
    
    function accuse() {
        var accusation = i+1;
        var friend = friendsArray[i % 5];          // mod with max value 4
        var location = locationsArray[i % 10];     // mod with max value 9
        var weapon = weaponsArray[i % 20];         // mod with max value 19
        return function () {
            alert(`Accusation ${accusation}:  I accuse ${friend}, with the ${weapon} in the ${location}!`);
        }
    };
    newH3.click(accuse());
}



