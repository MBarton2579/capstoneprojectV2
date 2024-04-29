const viewButtons = document.querySelectorAll('.exercise-cards-card-button');

viewButtons.forEach((button) => {
    let buttonValue = button.value;
    button.onclick = function() {
        localStorage.setItem('button-value', buttonValue)

        window.location.href = "exercise.html";

    }
})