const saveLS = (data) => {
    const serializedArr = JSON.stringify(data);
    localStorage.setItem("cfp", serializedArr);
}

const getLS = (data) => {
    const retrievedArr = localStorage.getItem("cfp");
    if (retrievedArr !== null){
        return JSON.parse(retrievedArr);
    }else {
        return [];
    }
}

//Had to load cfpData after function was declared. const functions are not hoisted (loaded first).
const cfpData = getLS();

export {saveLS, cfpData}