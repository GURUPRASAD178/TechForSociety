// Smart Lighting
let lightOn = false;
let occupancy = false;

function toggleLight() {
    lightOn = !lightOn;
    document.getElementById("light-status").innerText = lightOn ? "On" : "Off";
}

function simulateOccupancy() {
    occupancy = !occupancy;
    document.getElementById("occupancy-status").innerText = occupancy ? "Yes" : "No";

    // Auto light control
    if (occupancy) {
        lightOn = true;
        document.getElementById("light-status").innerText = "On";
    } else {
        lightOn = false;
        document.getElementById("light-status").innerText = "Off";
    }
}

// HVAC
function updateHVAC(temp) {
    document.getElementById("temp-display").innerText = temp;
    let status = "Idle";
    if (temp > 28) status = "Cooling ON";
    else if (temp < 20) status = "Heating ON";
    document.getElementById("hvac-status").innerText = status;
}

// Security
function scanFace() {
    const authorized = Math.random() > 0.3;
    document.getElementById("access-status").innerText = authorized ? "Access Granted" : "Unauthorized Alert!";
    document.getElementById("access-status").style.color = authorized ? "green" : "red";
}

// Water Management
let leakDetected = false;

function updateMoisture(val) {
    document.getElementById("moisture-display").innerText = val;
    const irrigation = val < 30 ? "On" : "Off";
    document.getElementById("irrigation-status").innerText = irrigation;
}

function toggleLeak() {
    leakDetected = !leakDetected;
    document.getElementById("leak-status").innerText = leakDetected ? "Yes" : "No";
    document.getElementById("leak-status").style.color = leakDetected ? "red" : "black";
}

// Energy Usage
function refreshEnergy() {
    const usage = (10 + Math.random() * 10).toFixed(2);
    document.getElementById("energy-usage").innerText = usage;
}
