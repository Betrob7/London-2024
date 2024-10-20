function countdown() {
    const targetDate = new Date("December 5, 2024 00:00:00").getTime();
    const countdownElement = document.getElementById('countdown');

    const interval = setInterval(function() {
        const now = new Date().getTime();
        const timeDifference = targetDate - now;

        if (timeDifference < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "<p>Vi är på väg till London! 🎉</p>";
        } else {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
        }
    }, 1000);
}

// Starta nedräkningen när sidan laddas
countdown();