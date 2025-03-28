const determineHouseSizePts = function(size) {
    let houseSizePoints = 0;
    if(size === "large") {
      houseSizePoints = 10;
    } else if(size === "medium") {
      houseSizePoints = 7;
    } else if (size === "small") {
      houseSizePoints = 4;
    } else if (size === "apt") {
      houseSizePoints = 2;
    }
      return houseSizePoints;
  }

const determineHouseHoldPts = function(numberInHousehold) {
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
        houseHoldPoints = 14;
    } else if (numberInHousehold === 2) {
        houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
        houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
        houseHoldPoints = 8;
    } else if (numberInHousehold === 5) {
        houseHoldPoints = 6;
    } else if (numberInHousehold === 6) {
        houseHoldPoints = 4;
    } else if (numberInHousehold > 6) {
        houseHoldPoints = 2;
    }
    return houseHoldPoints;
}

class FP{
    constructor (houseMembers, houseSize, first, last){
        this.firstName = first
        this.houseMembers = houseMembers
        this.houseSize = houseSize
        this.lastName = last
        this.determineHouseHoldPts()
        this.determineHouseSizePts()
        this.total()
    }
    //method for adding houseHoldPTS to obj
    determineHouseHoldPts(){
        if (this.houseMembers === 1) {
            this.houseHoldPTS = 14;
        } else if (this.houseMembers === 2) {
            this.houseHoldPTS = 12;
        } else if (this.houseMembers === 3) {
            this.houseHoldPTS = 10;
        } else if (this.houseMembers === 4) {
            this.houseHoldPTS = 8;
        } else if (this.houseMembers === 5) {
            this.houseHoldPTS = 6;
        } else if (this.houseMembers === 6) {
            this.houseHoldPTS = 4;
        } else if (this.houseMembers > 6) {
            this.houseHoldPTS = 2;
        }
    }
    //method for adding houseSizePts to obj
    determineHouseSizePts(){
        if(this.houseSize === "large") {
            this.houseSizePts = 10;
        } else if(this.houseSize === "medium") {
            this.houseSizePts = 7;
        } else if (this.houseSize === "small") {
            this.houseSizePts = 4;
        } else if (this.houseSize === "apt") {
            this.houseSizePts = 2;
        }
    }

    total(){
        this.total = this.houseHoldPTS + this.houseSizePts
    }
    //added for practice and fun, can call method to have console log whats in the obj
    debug(){
        console.log(this)
    }
}
export {FP}