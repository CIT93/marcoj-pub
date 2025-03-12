const cfpData = getLS();

function saveLS (data){
    const serializedArr = JSON.stringify(data);
    localStorage.setItem("cfp", serializedArr);
}

function getLS (data) {
    const retrievedArr = localStorage.getItem("cfp");
    if (retrievedArr !== null){
        return JSON.parse(retrievedArr);
    }else {
        return [];
    }
}

export {saveLS, cfpData}