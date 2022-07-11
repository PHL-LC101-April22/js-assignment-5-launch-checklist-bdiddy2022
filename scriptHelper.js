// Write your helper functions here!
//require('isomorphic-fetch');

//const { ConsoleReporter } = require("jasmine");


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
//     //This one first, then pickPlanet()
    let missionTarget = document.getElementById("missionTarget");
    let destinationInfo = document.createElement("h2");
    destinationInfo.innerHTML = "Destination Info";
    missionTarget.appendChild(destinationInfo);
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

    let statusArray = [pilot, copilot, fuelLevel, cargoLevel]
    launchStatus.style="visibility:visible";
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
        list.style = "visibility: visible";
        pilotStatus.innerHTML= `Pilot ${pilot} is ready for launch`;
        console.log("pilot update");
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;
        console.log("copilot update");
        
        
        
        if (fuelLevel<10000||cargoLevel>10000){
            launchStatus.innerHTML= "Shuttle not ready for launch";
            console.log(launchStatus);
            launchStatus.style ="color: red";
            if(fuelLevel < 10000) {
                console.log("fuel low");
                fuelStatus.innerHTML= "Fuel level is too low for launch";
                fuelStatus.style = "color:red";
                // launchStatusCheck.style = "visibility: visible";
                // launchStatus.innerHTML= "Shuttle not ready for launch";
                // launchStatus.style ="color: red";
            }
            if (cargoLevel > 10000) {
                console.log("cargo high");
                
                cargoStatus.innerHTML= "Cargo mass is too high for launch";
                cargoStatus.style = "color:red";
            } 

        }
        else{
            launchStatus.innerHTML = "Shuttle ready for launch";
            console.log(launchStatus.innerHTML);
            launchStatus.style= "color: green";
            cargoStatus.style = "black";
            fuelStatus.style = "black";
            cargoStatus.innerHTML = "Cargo mass is low enough for launch";
            fuelStatus.innerHTML = "Fuel level is high enough for launch";
            
        } 
    }
    else{
        formSubmission.preventDefault();
    }


}

async function myFetch() {

    let planetsReturned;
    
        planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            response.json().then(function( json){
                pickPlanet(json);
            })
            });
    
    return planetsReturned;
    }


function pickPlanet(planets) {

    let destinationNumber = (Math.round(5*(Math.random())));

    
    let destinationChoice = planets[destinationNumber];
    
    return addDestinationInfo(document, `<b>Name:</b> ${destinationChoice.name}`,`<b>Diameter:</b> ${destinationChoice.diameter}`, `<b>Star:</b> ${destinationChoice.star}`, `<b>Distance:</b> ${destinationChoice.distance}`, `<b>Moons:</b> ${destinationChoice.moons}`, destinationChoice.image);
}

 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;
