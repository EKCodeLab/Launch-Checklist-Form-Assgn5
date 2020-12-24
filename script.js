fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
    response.json().then(function (json) {
        const destination = document.getElementById("missionTarget");
        destination.innerHTML = 
        `<h2>Mission Destination</h2>
        <ol>
        <li>Name: ${json[2].name}</li>
        <li>Diameter: ${json[2].diameter}</li>
        <li>Star: ${json[2].star}</li>
        <li>Distance from Earth: ${json[2].distance}</li>
        <li>Number of Moons: ${json[2].moons}</li>
        </ol>
        <img src="${json[2].image}"></img>`;
    });
});
window.addEventListener("load", function() {
    let form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuel = document.querySelector("input[name=fuelLevel]");
        let cargo = document.querySelector("input[name=cargoMass]");
        let launch = document.getElementById('launchStatus');
 
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