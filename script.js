function updateClock() {

    const now = new Date();

    const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    document.getElementById("time").textContent =
        now.toLocaleTimeString("en-US", options);

}

// Update immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);
