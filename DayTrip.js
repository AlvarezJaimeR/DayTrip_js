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
let transportation = ['Audi RS7', 'Longboard', 'Tank'];
randomTransportation = chooseTransportation(transportation);

function chooseTransportation(listOfTransportations){
    randomTransportation = listOfTransportations[Math.floor(Math.random()*listOfTransportations.length)];
    console.log(randomTransportation);
    return randomTransportation;
}

//Randomly select a form of entertainment
let entertainment = ['Theme Park', 'Movies', 'Museum'];
randomEntertainment = chooseEntertainment(entertainment);

function chooseEntertainment(ListOfEntertainment){
    randomEntertainment = ListOfEntertainment[Math.floor(Math.random()*ListOfEntertainment.length)];
    console.log(randomEntertainment);
    return randomEntertainment;
}

//Randomly re-select a new option

//Confirm that my day trip is "Complete"

//Display completed trip in the console.