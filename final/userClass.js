import { userData } from "./storage.js"
import { champList } from "./champs.js"

export class user {
    constructor(rolePicked, lanePicked, howMany, random, firstName){
        this.firstName = firstName
        this.random = random
        this.lanePicked = lanePicked
        this.rolePicked = rolePicked
        this.howMany = howMany
        this.champs = this.getChamps()
        this.howManyReturned = this.champs.length
        userData.push(this)         
        
    }
    
    sorter = (data) => {
        data.sort((a, b) => a.timesPlayed - b.timesPlayed); //data.sort uses an implied return
        return data //return the results of the sort.
    }

    calculate = function(lane, role, howMany) {
        const champsToPlay = [] //where champs chosen will be stored
        const sortedList = this.sorter(champList); //calls function to sort the list
        sortedList.forEach(function(champ, index) { //goes through each champion from the sorted list
            if(champ.metalanes[lane] === true && champ.role === role){ //checks that the role and lane matches what was asked
                if (champsToPlay.length < howMany){ //Will stop more then requested from being added to the results
                    champsToPlay.push(champList[index]); 
                };
            };
        });
        return champsToPlay; // returns the created array of champs that fit the criteria
    }

    calculateRandom = function(howMany){
        const randomChamps = [];
        let num = 0;
        while (num !== howMany){ // I hope im using this right, the while loop is just something ive heard and i think it applies here. the number has to be between 1-5 so it shouldnt be a problem.
            let randomIndex = Math.floor(Math.random() * champList.length);// creates a random variable that is brought down to the nearest whole number and is only as high as there are entries in the champ list
            randomChamps.push(champList[randomIndex]); //uses the random number to pick a randomized champion from the list and pushes it to the pool of random champs
            num ++
        }
        return randomChamps 
    };

    getChamps = function(){
        if (this.random === true){
            const ranChamps = this.calculateRandom(this.howMany)
            return ranChamps
        }else{
            const recommendations = this.calculate(this.lanePicked, this.rolePicked, this.howMany)
            return recommendations
        }
    }
}

