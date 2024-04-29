const buttonValue = localStorage.getItem('button-value');
const exerciseCardTemplate = document.querySelector("[data-exercise-card-template]");
let exerciseCardContainer = document.querySelector("[data-exercise-card-container]");

function fullView() {
    const url = 'https://exercisedb.p.rapidapi.com/exercises/exercise/'.concat(buttonValue);
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '92cea14e71mshe5748deae4744b4p18dc2ejsncf5223be45e9',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

fetch(url, options)
	.then((response) => {
		return response.json();
	})
    .then((data) => {
        const card = exerciseCardTemplate.content.cloneNode(true).children[0];
			const cardImage = card.querySelector("[data-card-image]");
			const cardTitle = card.querySelector("[data-card-title]");
			const cardBodyPart = card.querySelector("[data-card-body-part]");
			const cardEquipment = card.querySelector("[data-card-equipment]");
			const cardTargetArea = card.querySelector("[data-card-target-area]");
			const cardSecondaryMuscles = card.querySelector("[data-card-secondary-muscles]");
            var cardInstructionsList = card.querySelector("[data-instructions-list]");
            const exerciseInstructions = data.instructions;

			cardImage.src = data.gifUrl;
			cardImage.alt = data.name;
			cardTitle.textContent = data.name.toUpperCase();
			cardBodyPart.textContent = data.bodyPart;
			cardEquipment.textContent = data.equipment;
			cardTargetArea.textContent = data.target;
			cardSecondaryMuscles.textContent = data.secondaryMuscles;

            exerciseInstructions.forEach(element => {
                var listItem = document.createElement('li');
                listItem.textContent = element;
                cardInstructionsList.appendChild(listItem);
            });

			exerciseCardContainer.append(card);
    })
    .catch((error) => console.log(error));

};

fullView();
