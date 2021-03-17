//Day Trip Generator

//Randomly select a destination
let destinations = ['Chicago', 'Seattle', 'Las Vegas'];
randomDestination = chooseDestination(destinations);

function chooseDestination(listOfDestinations){
    randomDestination = listOfDestinations[Math.floor(Math.random()*listOfDestinations.length)];
    console.log(randomDestination)
    return randomDestination;
}

//Randomly select a restaurant
let restaurants = ['Cheesecake Factory', 'Five Guys', 'Texas Roadhouse'];
randomRestaurant = chooseRestaurant(restaurants);

function chooseRestaurant(listOfRestaurants){
    randomRestaurant = listOfRestaurants[Math.floor(Math.random()*listOfRestaurants.length)];
    console.log(randomRestaurant);
    return randomRestaurant;
}

//Randomly select a mode of transportation
let transportation = ['Audi RS7', 'longboard', 'tank'];
randomTransportation = chooseTransportation(transportation);

function chooseTransportation(listOfTransportations){
    randomTransportation = listOfTransportations[Math.floor(Math.random()*listOfTransportations.length)];
    console.log(randomTransportation);
    return randomTransportation;
}

//Randomly select a form of entertainment
let entertainment = ['art gallery', 'movies', 'museum'];
randomEntertainment = chooseEntertainment(entertainment);

function chooseEntertainment(ListOfEntertainment){
    randomEntertainment = ListOfEntertainment[Math.floor(Math.random()*ListOfEntertainment.length)];
    console.log(randomEntertainment);
    return randomEntertainment;
}

//Completed trip (first pass);
let firstPass = [];
firstPass.push(randomDestination);
firstPass.push(randomRestaurant);
firstPass.push(randomTransportation);
firstPass.push(randomEntertainment);
console.log(firstPass);

function sentenceOutput(firstPass){
let sentence = "Congratulations! You're going to " + firstPass[0] + "! You get to eat at " + firstPass[1] + " . You'll be riding around town in a " + firstPass [2] + ". You'll finish the evening by going to the " + firstPass [3] + '!';
console.log(sentence);
}


//Randomly re-select a new option
let completed = false;
while (completed == false){
    let answer = prompt('Do you like your day trip itinerary? yes or no:');
    if (answer == 'yes'){
        console.log('Your day trip itinerary is complete!');
        sentence = "Congratulations! You're going to " + firstPass[0] + "! You get to eat at " + firstPass[1] + " . You'll be riding around town in a " + firstPass [2] + ". You'll finish the evening by going to the " + firstPass [3] + '!';
        let finalTrip = sentence;
        console.log(finalTrip);
        completed = true;
    }
    if(answer == 'no'){
        let user = prompt('What would you like to change? 0 - destination, 1 - restaurant, 2 - transportation, 3 - entertainment:')
        switch (user) {
            case "0":
                console.log('We are going to switch destination!');
                randomDestinationTwo = chooseDestination(destinations);
                while (firstPass[0] == randomDestinationTwo){
                    randomDestiationTwo = chooseDestination(destinations);
                }
                firstPass.splice(0, 1, randomDestinationTwo);
                console.log(firstPass);
                sentence = "Congratulations! You're going to " + firstPass[0] + "! You get to eat at " + firstPass[1] + " . You'll be riding around town in a " + firstPass [2] + ". You'll finish the evening by going to the " + firstPass [3] + '!';
                console.log(sentence);
                break;
            case "1":
                console.log('We are going to switch restaurant!');
                randomRestaurantTwo = chooseRestaurant(restaurants);
                while (firstPass[1] == randomRestaurantTwo){
                    randomRestaurantTwo = chooseDestination(restaurants);
                }
                firstPass.splice(1, 1, randomRestaurantTwo);
                console.log(firstPass);
                sentence = "Congratulations! You're going to " + firstPass[0] + "! You get to eat at " + firstPass[1] + " . You'll be riding around town in a " + firstPass [2] + ". You'll finish the evening by going to the " + firstPass [3] + '!';
                console.log(sentence);
                break;
            case "2":
                console.log('We are going to switch transportation!');
                randomTransportationTwo = chooseTransportation(transportation);
                while (firstPass[2] == randomTransportationTwo){
                    randomTransportationTwo = chooseDestination(transportationTwo);
                }
                firstPass.splice(2, 1, randomTransportation);
                console.log(firstPass);
                sentence = "Congratulations! You're going to " + firstPass[0] + "! You get to eat at " + firstPass[1] + " . You'll be riding around town in a " + firstPass [2] + ". You'll finish the evening by going to the " + firstPass [3] + '!';
                console.log(sentence);
                break;
            case "3":
                console.log('We are going to switch entertainment!');
                randomEntertainmentTwo = chooseEntertainment(entertainment);
                while (firstPass[3] == randomEntertainmentTwo){
                    randomEntertainmentTwo = chooseDestination(entertainment);
                }
                firstPass.splice(3, 1, randomEntertainment);
                console.log(firstPass);
                sentence = "Congratulations! You're going to " + firstPass[0] + "! You get to eat at " + firstPass[1] + " . You'll be riding around town in a " + firstPass [2] + ". You'll finish the evening by going to the " + firstPass [3] + '!';
                console.log(sentence);
                break;
        }
    }
}
//Confirm that my day trip is "Complete"

//Display completed trip in the console.
