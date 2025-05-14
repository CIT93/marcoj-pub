const saveLS = function(data){
    const serializedArr = JSON.stringify(data);
    localStorage.setItem("userData", serializedArr);
}

const getLS = function(data) {
    const retrievedArr = localStorage.getItem("userData");
    if (retrievedArr !== null){
        return JSON.parse(retrievedArr);
    }else {
        return [];
    }
}

const userData = getLS();

export {saveLS, userData}