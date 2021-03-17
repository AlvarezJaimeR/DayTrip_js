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
let codePassArray = [];
codePassArray.push(randomDestination);
codePassArray.push(randomRestaurant);
codePassArray.push(randomTransportation);
codePassArray.push(randomEntertainment);
console.log(codePassArray);

function sentenceOutput(arrayOfChoices){
    let sentence = "Congratulations! You're going to " + arrayOfChoices[0] + "! You get to eat at " + arrayOfChoices[1] + " . You'll be riding around town in a " + arrayOfChoices [2] + ". You'll finish the evening by going to the " + arrayOfChoices [3] + '!';
    //console.log(sentence);
    return sentence;
}

let consoleSentence = sentenceOutput(codePassArray);
console.log(consoleSentence);

//Randomly re-select a new option
let completed = false;
while (completed == false){
    let answer = prompt('Do you like your day trip itinerary? yes or no:');
    if (answer == 'yes'){
        //Confirm that my day trip is "Complete"
        console.log('Your day trip itinerary is complete!');
        //Display completed trip in the console.
        consoleSentence = sentenceOutput(codePassArray);
        console.log(consoleSentence);
        completed = true;
    }
    if(answer == 'no'){
        let reroll = false;
        while (reroll == false){
            let userSwitch = prompt('What would you like to change? 0 - destination, 1 - restaurant, 2 - transportation, 3 - entertainment:')
            switch (userSwitch) {
                case "0":
                    console.log('We are going to switch destination!');
                    codePassArray = rerollChoice('0', codePassArray[0]);
                    consoleSentence = sentenceOutput(codePassArray);
                    console.log(consoleSentence);
                    reroll = true;
                    break;
                case "1":
                    console.log('We are going to switch restaurant!');
                    codePassArray = rerollChoice('1', codePassArray[1]);
                    consoleSentence = sentenceOutput(codePassArray);
                    console.log(consoleSentence);
                    reroll = true;
                    break;
                case "2":
                    console.log('We are going to switch transportation!');
                    codePassArray = rerollChoice('2', codePassArray[2]);
                    consoleSentence = sentenceOutput(codePassArray);
                    console.log(consoleSentence);
                    reroll = true;
                    break;
                case "3":
                    console.log('We are going to switch entertainment!');
                    codePassArray = rerollChoice('3', codePassArray[3]);
                    consoleSentence = sentenceOutput(codePassArray);
                    console.log(consoleSentence);
                    reroll = true;
                    break;
            }
        }
    }
}

function rerollChoice(userChoiceToReroll, oldValue){
    switch (userChoiceToReroll){
        case '0':
            randomDestinationTwo = chooseDestination(destinations);
            while (oldValue == randomDestinationTwo){
                randomDestiationTwo = chooseDestination(destinations);
            }
            codePassArray.splice(0, 1, randomDestinationTwo);
            console.log(codePassArray);
            return codePassArray;
        case '1':
            randomRestaurantTwo = chooseRestaurant(restaurants);
            while (oldValue == randomRestaurantTwo){
                randomRestaurantTwo = chooseDestination(restaurants);
            }
            codePassArray.splice(1, 1, randomRestaurantTwo);
            console.log(codePassArray);
            return codePassArray;
        case '2':
            randomTransportationTwo = chooseTransportation(transportation);
            while (oldValue == randomTransportationTwo){
                randomTransportationTwo = chooseDestination(transportation);
            }
            codePassArray.splice(2, 1, randomTransportation);
            console.log(codePassArray);
            return codePassArray;
        case '3':
            randomEntertainmentTwo = chooseEntertainment(entertainment);
            while (oldValue == randomEntertainmentTwo){
                randomEntertainmentTwo = chooseDestination(entertainment);
            }
            codePassArray.splice(3, 1, randomEntertainment);
            console.log(codePassArray);
            return codePassArray;
    }
}