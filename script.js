function updateTime() {
    const timeContainer = document.getElementById('time-container');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    // const seconds = now.getSeconds().toString().padStart(2, '0');
    timeContainer.textContent = `${hours}:${minutes}`;
}

setInterval(updateTime, 1000); // Update the time every second
updateTime(); // Initial call to display time immediately