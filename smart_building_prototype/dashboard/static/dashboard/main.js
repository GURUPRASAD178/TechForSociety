function toggleLighting() {
    const status = document.getElementById("lighting-status");
    if (status.innerText === "OFF") {
        status.innerText = "ON";
        status.style.color = "green";
    } else {
        status.innerText = "OFF";
        status.style.color = "red";
    }
}

let temp = 22;
function increaseTemp() {
    temp++;
    document.getElementById("hvac-temp").innerText = `${temp}°C`;
}

function decreaseTemp() {
    temp--;
    document.getElementById("hvac-temp").innerText = `${temp}°C`;
}
