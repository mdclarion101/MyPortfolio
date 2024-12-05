function showPortfolio(event, message) {
    event.preventDefault();
    document.getElementById('modal').style.display = 'flex';

    document.getElementById('modal-message').innerText = "You will now be redirected to my " + message + " works. Please wait:";

    var countdown = 3;
    var countdownElement = document.getElementById('countdown');

    var countdownInterval = setInterval(function() {
        countdown--;
        countdownElement.innerText = countdown;

        if (countdown <= 0) {
            clearInterval(countdownInterval);
            window.location.href = event.target.closest('a').href;
        }
    }, 1000);
}

function showContact(event, message) {
    event.preventDefault();

    document.getElementById('modal').style.display = 'flex';

    document.getElementById('modal-message').innerText = "You will now be redirected to my " + message + " Account. Please wait:";

    var countdown = 3;
    var countdownElement = document.getElementById('countdown');

    var countdownInterval = setInterval(function() {
        countdown--;
        countdownElement.innerText = countdown;

        if (countdown <= 0) {
            clearInterval(countdownInterval);
            window.location.href = event.target.closest('a').href;
        }
    }, 1000);
}
