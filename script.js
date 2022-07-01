//const { formSubmission } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

// window.addEventListener("load", function() {

// });





window.addEventListener("load", function() {
    let form = document.getElementById("launchForm");
    let button = document.getElementById("formSubmit");
    let list = document.getElementById("faultyItems");

// button.addEventListener("click", function(event) {
//     // let pilot= document.getElementById("pilotName");
//     // let copilot= document.getElementById("copilotName");
//     // let fuelLevel = document.getElementById("fuelLevel");
//     // let cargoLevel = document.getElementById("cargoMass");
//     console.log("click")

//     let pilot = document.querySelector("input[name=pilotName]");
//     // console.log(pilot);
//     let copilot = document.querySelector("input[name=copilotName]");
//     // console.log(copilot);
//     let fuelLevel = document.querySelector("input[name=fuelLevel]");
//     // console.log(fuelLevel);
//     let cargoLevel = document.querySelector("input[name=cargoMass]");
//     // console.log(cargoLevel);
//     if ( formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) === false) {

//         console.log("*****PREVENT DEFAULT*****")
//         event.preventDefault();
//         }

//     });
    // let pilot = document.querySelector("input[name=pilotName]").value;
    // // console.log(pilot);
    // let copilot = document.querySelector("input[name=copilotName]").value;
    // // console.log(copilot);
    // let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    // // console.log(fuelLevel);
    // let cargoLevel = document.querySelector("input[name=cargoMass]").value;
    // // console.log(cargoLevel);

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

