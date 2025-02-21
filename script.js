
// Set the date of the event you are counting down to
// Set the date of the event you are counting down to (Year, Month, Day)
const eventDate = new Date(2025, 1, 28); // Note: Months are 0-indexed in JavaScript

function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = eventDate - currentDate;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the countdown display
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, display a message
    if (timeDifference < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Event has started!";
    }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Hide the loading spinner once the page has fully loaded
window.addEventListener('load', function() {
    const spinnerWrapperE1 = document.querySelector('.spinner-wrapper');
    spinnerWrapperE1.style.opacity = '0';

    setTimeout(() => {
        spinnerWrapperE1.style.display = 'none';
    }, 200);
});
