const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers){
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(x){
    return function(fare){
        return (Number(fare) * Number(x))
    }
}

const fareCalculator = createFareMultiplier(2);
function fareDoubler(fare){
    return fareCalculator(fare)
}

const fareCalculator1 = createFareMultiplier(3);
function fareTripler(fare){
    return fareCalculator1(fare)
}

function selectDifferentDrivers(arrayOfDrivers, returnDriversFunctions) {
    return returnDriversFunctions(arrayOfDrivers);
}

