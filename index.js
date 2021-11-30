const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(drivers){
    const TwoDrivers = drivers.slice(0,2);
    return TwoDrivers;
}

function returnLastTwoDrivers(){
    const LTwoDrivers = drivers.slice(2,4);
    return LTwoDrivers;
}

const selectingDrivers = [];
selectingDrivers[0] = returnFirstTwoDrivers;
selectingDrivers[1] = returnLastTwoDrivers;

function createFareMultiplier(fare){
let multiplier=fare;
return function (fare){
return multiplier*fare;
}
}

function fareDoubler(fare){
return fare *2;
}

function fareTripler(fare){
return fare *3;
}

function selectDifferentDrivers(drivers,activity){
    if (activity === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
    }
    if (activity === returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers);
    }
}