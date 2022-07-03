// Write your helper functions here!
//require('isomorphic-fetch');

//const { ConsoleReporter } = require("jasmine");
//const document = require("./index.html")


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
//     //This one first, then pickPlanet()
    let missionTarget = document.getElementById("missionTarget");
    let planetList = document.createElement("ol");
    missionTarget.appendChild(planetList);
    


    let infoArray = [name, diameter, star, distance, moons, imageUrl];
    for(i=0;i<infoArray.length;i++){
        
        if(i<5){
        let planetItem = document.createElement("li");
        planetList.appendChild(planetItem);
        planetItem.innerHTML = `${infoArray[i]}`;
        }
        else{
            let planetImg = document.createElement("img");
            planetImg.src = infoArray[i];
            missionTarget.appendChild(planetImg);
        }

    }
}

function validateInput(testInput) {

    let stringAnalysis;

    if(testInput === "") {
        stringAnalysis = "Empty";
        console.log(stringAnalysis);    
    }

    else if (isNaN(testInput)) {
        stringAnalysis = "Not a Number";
    }
    
    else {
        stringAnalysis = "Is a Number";
    }
    
    return stringAnalysis;         
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // let launchStatus = document.getElementById("launchStatus");
    // let cargoStatus = document.getElementById("cargoStatus");
    // let fuelStatus = document.getElementById("fuelStatus");
    // let pilotStatus = document.getElementById("pilotStatus");
    // let copilotStatus = document.getElementById("copilotStatus");



    let statusArray = [pilot, copilot, fuelLevel, cargoLevel]
    
    let testPassed = true;
    console.log(statusArray);


    for (i=0; i<statusArray.length; i++){
        console.log(statusArray[i]);
        console.log(validateInput(statusArray[i]));
        if (validateInput(statusArray[i]) === "Empty") { 
            testPassed = false;
            alert("All form items must be filled");
        }
    }
 
        
    
    if (validateInput(pilot) === "Is a Number" || validateInput(copilot)==="Is a Number"){
        alert("All names must solely consist of letters A-Z");
        testPassed = false;
    }
    if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel)==="Not a Number"){
        alert("All levels must solely consist of digits 0-9");
        testPassed = false;
    }
    if (testPassed = true){
        pilotStatus.innerHTML= `Pilot ${pilot} is ready for launch`;
        console.log("pilot update");
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;
        console.log("copilot update");
        if(fuelLevel < 10000) {
            console.log("fuel low");
            fuelStatus.innerHTML= "Fuel level is too low for launch";
            fuelStatus.style = "color:red";
            launchStatusCheck.style = "visibility: visible";
            launchStatus.innerHTML= "Shuttle not ready for launch";
            launchStatus.style ="color: red";
        }
         if (cargoLevel > 10000) {
            console.log("cargo high");
            list.style = "visibility: visible";
            cargoStatus.innerHTML= "Cargo mass is too high for launch";
            cargoStatus.style = "color:red";
              launchStatus.innerHTML = "Shuttle not ready for launch";
              console.log(launchStatus);
              launchStatus.style = "color: red";
        } 
        else{
            launchStatus.innerHTML = "Shuttle ready for launch";
            console.log(launchStatus.innerHTML);
            launchStatus.style= "color: green";
            cargoStatus.style = "black";
            fuelStatus.style = "black";
            cargoStatus.innerHTML = "Cargo mass is low enough for launch";
            fuelStatus.innerHTML = "Fuel level is high enough for launch";
            faultyItems.style = "visibility: hidden";
        } 
    }
    else{
        formSubmission.preventDefault();
    }


}

async function myFetch() {
    // myFetch() has some of the code necessary for fetching planetary JSON, however, it is not complete. 
    // You need to add the URL and return response.json().
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let planetsReturned;
    
        planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            response.json().then(function( json){
                pickPlanet(json);
            })
            });
    
    return planetsReturned;
    }
// First, do as the comments in the code tell you and set listedPlanetsResponse equal to the value returned when calling myFetch(). 
//This value is going to be a promise. 
//If we head to our browser and open up our developer tools, we can now see a list of the planets. 
// Then using pickPlanet() and addDestinationInfo(), select a planet at random from listedPlanets and pass that information to addDestinationInfo(). 
// Reload your page and check out your site to see the mission target information






function pickPlanet(planets) {
    //This one after addDestinationInfo(), then myFetch()

    // pickPlanet() takes in one argument: a list of planets. 
    // Using Math.random(), return one planet from the list with a randomly-selected index. 
    let destinationNumber = (Math.round(5*(Math.random())));
    console.log(planets);
    
    let destinationChoice = planets[destinationNumber];
    
    return addDestinationInfo(document, `Name: ${destinationChoice.name}`,`Diameter: ${destinationChoice.diameter}`, `Star: ${destinationChoice.star}`, `Distance: ${destinationChoice.distance}`, `Moons: ${destinationChoice.moons}`, destinationChoice.image);
}

 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;
