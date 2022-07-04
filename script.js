//const { formSubmission } = require("./scriptHelper");






window.addEventListener("load", function() {
    //addDestinationInfo();
    let form = document.getElementById("launchForm");
    let button = document.getElementById("formSubmit");
    let list = document.getElementById("faultyItems");
    let listedPlanetsResponse = myFetch();
    console.log("Listed Planets Response", listedPlanetsResponse)
    let listedPlanets;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = listedPlanetsResponse[0];
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let chosenPlanet = pickPlanet(listedPlanets);
    
    addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.imageUrl);
    })
    
    
    
    


    button.addEventListener("click", function(){
    let list = document.getElementById("faultyItems");
    let pilot = document.querySelector("input[name=pilotName]").value;

    let copilot = document.querySelector("input[name=copilotName]").value;

    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;

    let cargoLevel = document.querySelector("input[name=cargoMass]").value;

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });

    form.addEventListener("submit", function(event){
        event.preventDefault();
    });
        
 

   
});

