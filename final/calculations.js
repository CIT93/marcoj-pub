import { userData } from "./storage.js";
import { champList } from "./champs.js";

//function that sorts champions based on number of times used
const sorter = (data) => {
    data.sort((a, b) => a.timesPlayed - b.timesPlayed); //data.sort uses an implied return
    return data //return the results of the sort.
}

//function that calls for the sorting of the champion list, then returns only champions that fit the criteria
const listConstructor = function(data, lanePicked, rolePicked, howMany) {
    const champsToPlay = [] //where champs chosen will be stored
    const sortedList = sorter(data); //calls function to sort the list
    sortedList.forEach(function(champ, index) { //goes through each champion from the sorted list
        if(champ.metalanes[lanePicked] === true && champ.role === rolePicked){ //checks that the role and lane matches what was asked
            if (champsToPlay.length < howMany){ //Will stop more then requested from being added to the results
                champsToPlay.push( // pushes the champion object to champs to play
                    data[index]
                ); 
            };
        };
    });
    return champsToPlay; // returns the created array of champs that fit the criteria
}

// function that calls for the creation of the recommendation then stores it along with user inputs into userData
const calculate = function(rolePicked, lanePicked, howMany, firstName){
    var recommendation = [];
    recommendation = listConstructor(champList, lanePicked, rolePicked, howMany);
    userData.push({
        firstName: firstName,
        champs: recommendation, //this is an array objects, of the champions chosen from the criteria. 
        lanePicked: lanePicked,
        rolePicked: rolePicked,
        howMany: howMany,
        howManyReturned: recommendation.length
    });
}

const calculateRandom = function(howMany){
    const randomChamps = [];
        let num = 0;
        while (num !== howMany){ // I hope im using this right, the while loop is just something ive heard and i think it applies here. the number has to be between 1-5 so it shouldnt be a problem.
            let randomIndex = Math.floor(Math.random() * champList.length);// creates a random variable that is brought down to the nearest whole number and is only as high as there are entries in the champ list
            randomChamps.push(champList[randomIndex]); //uses the random number to pick a randomized champion from the list and pushes it to the pool of random champs
            num ++
        }
        userData.push({
            champs: randomChamps
    });
}

export {calculate, calculateRandom}