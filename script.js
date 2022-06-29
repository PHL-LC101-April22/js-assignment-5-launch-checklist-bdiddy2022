// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })

});


window.addEventListener("load", function() {
let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    console.log(pilotName.value,copilotName.value, fuelLevel.value, cargoMass.value)
    console.log(Number(pilotName.value), Number(copilotName.value), Number(fuelLevel.value), Number(cargoMass.value))
    console.log("goodbye");
    if(pilotName.value===""||copilotName.value===""||fuelLevel.value===""||cargoMass.value===""){
        console.log("empty trigger");
        alert("All fields are required");
        event.preventDefault();
    }
    else if(Number(pilotName.value)!="NaN"){
        console.log("type trigger");
        alert("Please use letters for names, numbers for levels");
        event.preventDefault();
    }
    else{
        console.log("ITWORKED");
    }

});

});