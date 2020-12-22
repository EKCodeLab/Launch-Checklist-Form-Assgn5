
// let areFieldsFilled = function(value) {
//     if (value === "") {
//         alert("All fields are required!");
//         //event.preventDefault();
//     }
// }

// let isFieldAString = function(value) {
//     if (!isNaN(value)) {
//         alert("Field requires a letter-name");
//     }
// }

// let isFieldANumber = function(value) {
//     if (isNaN(value)) {
//         alert("Field requires a numeric value");
//     }
// }

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuel = document.querySelector("input[name=fuelLevel]");
        let cargo = document.querySelector("input[name=cargoMass]");
        
    // Validate input   
    //    areFieldsFilled(pilot.value);
    //    areFieldsFilled(copilot.value);
    //    areFieldsFilled(fuel.value);
    //    areFieldsFilled(cargo.value);
    //    isFieldAString(pilot.value);
    //    isFieldAString(copilot.value);
    //    isFieldANumber(fuel.value);
    //    isFieldANumber(cargo.value);   

        if (pilot.value === "" || copilot.value === "" || fuel.value === "" || cargo.value === "") {
           alert("All fields are required!");
           //event.preventDefault();
        } else if (!isNaN(pilot.value) || !isNaN(copilot.value) || isNaN(fuel.value) || isNaN(cargo.value)) {
            alert("Please enter text for names and numbers for values.");
        } else {
            let faultyItems = document.getElementById('faultyItems');
            let pilotStatus = document.getElementById('pilotStatus');
            let copilotStatus = document.getElementById('copilotStatus');

                faultyItems.style.visibility = "visible";
                pilotStatus.innerHTML = `pilot is ready for launch!`;
                copilotStatus.innerHTML = `copilot is ready for launch`;
        
                    if (fuel.value < 10000) {
                    let launch = document.getElementById('launchStatus');
                    let fuelStatus = document.getElementById('fuelStatus');

                        faultyItems.style.visibility = "visible";
                        launch.innerHTML = 'Shuttle not ready for launch';
                        launch.style.color = "red";
                        fuelStatus.innerHTML = `there is not enough fuel for the journey.`;
                        }
        }

    
        
})})