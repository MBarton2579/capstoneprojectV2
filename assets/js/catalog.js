const exerciseCardTemplate = document.querySelector("[data-exercise-card-template]");
const exerciseCardContainer = document.querySelector("[data-exercise-card-container]");
const searchInput = document.querySelector("[data-filter]");

let exercisesArray = [];

searchInput.addEventListener("input", (e) => {
	const value = e.target.value.toLowerCase();
	exercisesArray.forEach((exercise) => {
		const isVisible = exercise.name.toLowerCase().includes(value);
		exercise.element.classList.toggle("hide", !isVisible);
	});
	console.log(exercisesArray);
});

let url = "https://exercisedb.p.rapidapi.com/exercises?limit=1500";
let options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "92cea14e71mshe5748deae4744b4p18dc2ejsncf5223be45e9",
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
	},
};
fetch(url, options)
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		exercisesArray = data.map((exercise) => {
			const card = exerciseCardTemplate.content.cloneNode(true).children[0];
			const cardImage = card.querySelector("[data-card-image]");
			const cardTitle = card.querySelector("[data-card-title]");
			const cardBodyPart = card.querySelector("[data-card-body-part]");
			const cardEquipment = card.querySelector("[data-card-equipment]");
			const cardTargetArea = card.querySelector("[data-card-target-area]");
			const cardSecondaryMuscles = card.querySelector("[data-card-secondary-muscles]");

			cardImage.src = exercise.gifUrl;
			cardImage.alt = exercise.name;
			cardTitle.textContent = exercise.name.toUpperCase();
			cardBodyPart.textContent = exercise.bodyPart;
			cardEquipment.textContent = exercise.equipment;
			cardTargetArea.textContent = exercise.target;
			cardSecondaryMuscles.textContent = exercise.secondaryMuscles;
			exerciseCardContainer.append(card);
			return { name: exercise.name, element: card };
		});
	})
	.catch((error) => console.log(error));

/*fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(res => {
	const data = res.products;
	exercisesArray = data.map(exercise => {
		const card = exerciseCardTemplate.content.cloneNode(true).children[0];
		const cardImage = card.querySelector("[data-card-image]");
		const cardTitle = card.querySelector("[data-card-title]");
		const cardBodyPart = card.querySelector("[data-card-body-part]");
		const cardEquipment = card.querySelector("[data-card-equipment]");
		const cardTargetArea = card.querySelector("[data-card-target-area]");
		const cardSecondaryMuscles = card.querySelector("[data-card-secondary-muscles]");
		
		cardImage.src = exercise.thumbnail;
		cardTitle.textContent = exercise.title;
		cardBodyPart.textContent = exercise.title;
		cardEquipment.textContent = exercise.title;
		cardTargetArea.textContent = exercise.title;
		cardSecondaryMuscles.textContent = exercise.title;
		exerciseCardContainer.append(card);
		return { title: exercise.title, element: card }
	});
})*/
