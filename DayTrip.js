"use strict";
//Day Trip Generator

//Randomly select a destination
let destinations = ['Chicago', 'Seattle', 'Las Vegas'];
let randomDestination = chooseRandom('0');

//Randomly select a restaurant
let restaurants = ['Cheesecake Factory', 'Five Guys', 'Texas Roadhouse'];
let randomRestaurant = chooseRandom('1');

//Randomly select a mode of transportation
let transportation = ['Audi RS7', 'longboard', 'tank'];
let randomTransportation = chooseRandom('2');

//Randomly select a form of entertainment
let entertainment = ['art gallery', 'movies', 'museum'];
let randomEntertainment = chooseRandom('3');

function chooseRandom(dayTripChoice){
    switch (dayTripChoice){
        case '0':
            let randomDestination = destinations[Math.floor(Math.random()*destinations.length)];
            console.log(randomDestination)
            return randomDestination;
        case '1':
            let randomRestaurant = restaurants[Math.floor(Math.random()*restaurants.length)];
            console.log(randomRestaurant);
            return randomRestaurant;
        case '2':
            let randomTransportation = transportation[Math.floor(Math.random()*transportation.length)];
            console.log(randomTransportation);
            return randomTransportation;
        case '3':
            let randomEntertainment = entertainment[Math.floor(Math.random()*entertainment.length)];
            console.log(randomEntertainment);
            return randomEntertainment;
    }
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
            let randomDestinationTwo = chooseRandom('0');
            while (oldValue == randomDestinationTwo){
                randomDestinationTwo = chooseRandom('0');
            }
            codePassArray.splice(0, 1, randomDestinationTwo);
            console.log(codePassArray);
            return codePassArray;
        case '1':
            let randomRestaurantTwo = chooseRandom('1');
            while (oldValue == randomRestaurantTwo){
                randomRestaurantTwo = chooseRandom('1');
            }
            codePassArray.splice(1, 1, randomRestaurantTwo);
            console.log(codePassArray);
            return codePassArray;
        case '2':
            let randomTransportationTwo = chooseRandom('2');
            while (oldValue == randomTransportationTwo){
                randomTransportationTwo = chooseRandom('2');
            }
            codePassArray.splice(2, 1, randomTransportationTwo);
            console.log(codePassArray);
            return codePassArray;
        case '3':
            let randomEntertainmentTwo = chooseRandom('3');
            while (oldValue == randomEntertainmentTwo){
                randomEntertainmentTwo = chooseRandom('3');
            }
            codePassArray.splice(3, 1, randomEntertainmentTwo);
            console.log(codePassArray);
            return codePassArray;
    }
}