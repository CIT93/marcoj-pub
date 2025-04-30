import { cfpData } from "./storage.js";

//transforms cfp objects into an array with their totals
const getTotalArr = function(data){
    const cfpscores = data.map(obj => obj.total)
    console.log(`arr of totals created: ${cfpscores}`)
    return cfpscores
}

//takes cfp totals arr and outputs the avg
const getAvgTotals = function(totals){
    const sum = totals.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / totals.length
    return avg
}

//gets an arr with totals, then finds and returns the avg.
export const getAvg = function(){
    console.log(`starting average function`)
    const totals =  getTotalArr(cfpData)
    const avgTotal =  getAvgTotals(totals)

    return avgTotal
}