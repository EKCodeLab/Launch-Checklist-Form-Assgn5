
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
        let launch = document.getElementById('launchStatus');
        //event.preventDefault();
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
           event.preventDefault();
        } else if (!isNaN(pilot.value) || !isNaN(copilot.value) || isNaN(fuel.value) || isNaN(cargo.value)) {
            alert("Please enter text for names and numbers for values.");
            event.preventDefault();
        } else {
            let faultyItems = document.getElementById('faultyItems');
            let pilotStatus = document.getElementById('pilotStatus');
            let copilotStatus = document.getElementById('copilotStatus');

            pilotStatus.innerHTML = `pilot ${pilot.value} is ready for launch!`;
            copilotStatus.innerHTML = `copilot ${copilot.value} is ready for launch`;
        
                    if (fuel.value < 10000) {
                    let fuelStatus = document.getElementById('fuelStatus');

                        faultyItems.style.visibility = "visible";
                        launch.innerHTML = 'Shuttle not ready for launch';
                        launch.style.color = "red";
                        fuelStatus.innerHTML = `there is not enough fuel for the journey.`;
                        event.preventDefault();
                    } else if (cargo.value > 10000) {
                        faultyItems.style.visibility = "visible";
                        launch.innerHTML = 'Shuttle not ready for launch';
                        launch.style.color = "red";
                        cargoStatus.innerHTML =`there is too much mass for the shuttle to take off.`
                        event.preventDefault();
                    } else {
                        launch.innerHTML = 'Shuttle is ready for launch';
                        launch.style.color = "green";
                        event.preventDefault();
                    }
        }
})})