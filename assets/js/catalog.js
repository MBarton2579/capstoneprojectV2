const exerciseCardTemplate = document.querySelector("[data-exercise-card-template]");
let exerciseCardContainer = document.querySelector("[data-exercise-card-container]");
const searchInput = document.querySelector("[data-filter]");
const pageButton1 = document.querySelector(".p-1");
const pageButton2 = document.querySelector(".p-2");
const pageButton3 = document.querySelector(".p-3");
const pageButton4 = document.querySelector(".p-4");
const pageButton5 = document.querySelector(".p-5");
const pageButton6 = document.querySelector(".p-6");
const pageButton7 = document.querySelector(".p-7");
const pageButton8 = document.querySelector(".p-8");
const pageButton9 = document.querySelector(".p-9");
const pageButton10 = document.querySelector(".p-10");
const pageButton11 = document.querySelector(".p-11");
const pageButton12 = document.querySelector(".p-12");
const pageButton13 = document.querySelector(".p-13");
const pageButton14 = document.querySelector(".p-14");

let exercisesArray = [];


window.onload = function() {

	filterExercise("all");
	searchInput.addEventListener("input", (e) => {
		filterExercise('all');
		const value = e.target.value.toLowerCase();
		exercisesArray.forEach((exercise) => {
		const isVisible = exercise.name.toLowerCase().includes(value);
		exercise.element.classList.toggle("hide", !isVisible);
	});
	console.log(exercisesArray);
});

let url = "https://exercisedb.p.rapidapi.com/exercises?limit=100";
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
			const cardButton = card.querySelector("[data-card-button]");

			cardImage.src = exercise.gifUrl;
			cardImage.alt = exercise.name;
			cardTitle.textContent = exercise.name.toUpperCase();
			cardBodyPart.textContent = exercise.bodyPart;
			cardEquipment.textContent = exercise.equipment;
			cardTargetArea.textContent = exercise.target;
			cardSecondaryMuscles.textContent = exercise.secondaryMuscles;
			cardButton.value = exercise.id;
			cardButton.onclick = function() {
        		localStorage.setItem('button-value', cardButton.value);

        		window.location.href = "exercise.html";

    		};
			exerciseCardContainer.append(card);
			return { name: exercise.name, bodyPart: exercise.bodyPart, element: card };
		});
	})
	.catch((error) => console.log(error));

};

	pageButton1.onclick = function(){

		exerciseCardContainer.innerHTML = "";

		filterExercise("all");
		searchInput.addEventListener("input", (e) => {
			const value = e.target.value.toLowerCase();
			exercisesArray.forEach((exercise) => {
				const isVisible = exercise.name.toLowerCase().includes(value);
				exercise.element.classList.toggle("hide", !isVisible);
			});
			console.log(exercisesArray);
		});

		let url = "https://exercisedb.p.rapidapi.com/exercises?limit=100";
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
					return { name: exercise.name, bodyPart: exercise.bodyPart, element: card };
				});
			})
			.catch((error) => console.log(error));
	};

	pageButton2.onclick = function(){

		exerciseCardContainer.innerHTML = "";

		filterExercise("all");
		searchInput.addEventListener("input", (e) => {
			const value = e.target.value.toLowerCase();
			exercisesArray.forEach((exercise) => {
				const isVisible = exercise.name.toLowerCase().includes(value);
				exercise.element.classList.toggle("hide", !isVisible);
			});
			console.log(exercisesArray);
		});

		let url = "https://exercisedb.p.rapidapi.com/exercises?limit=100&offset=100";
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
					return { name: exercise.name, bodyPart: exercise.bodyPart, element: card };
				});
			})
			.catch((error) => console.log(error));
	};

	pageButton3.onclick = function(){

		exerciseCardContainer.innerHTML = "";

		filterExercise("all");
		searchInput.addEventListener("input", (e) => {
			const value = e.target.value.toLowerCase();
			exercisesArray.forEach((exercise) => {
				const isVisible = exercise.name.toLowerCase().includes(value);
				exercise.element.classList.toggle("hide", !isVisible);
			});
			console.log(exercisesArray);
		});

		let url = "https://exercisedb.p.rapidapi.com/exercises?limit=100&offset=200";
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
					return { name: exercise.name, bodyPart: exercise.bodyPart, element: card };
				});
			})
			.catch((error) => console.log(error));
	};

	pageButton4.onclick = function(){

		exerciseCardContainer.innerHTML = "";

		filterExercise("all");
		searchInput.addEventListener("input", (e) => {
			const value = e.target.value.toLowerCase();
			exercisesArray.forEach((exercise) => {
				const isVisible = exercise.name.toLowerCase().includes(value);
				exercise.element.classList.toggle("hide", !isVisible);
			});
			console.log(exercisesArray);
		});

		let url = "https://exercisedb.p.rapidapi.com/exercises?limit=100&offset=300";
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
					return { name: exercise.name, bodyPart: exercise.bodyPart, element: card };
				});
			})
			.catch((error) => console.log(error));
	};

	pageButton5.onclick = function(){

		exerciseCardContainer.innerHTML = "";

		filterExercise("all");
		searchInput.addEventListener("input", (e) => {
			const value = e.target.value.toLowerCase();
			exercisesArray.forEach((exercise) => {
				const isVisible = exercise.name.toLowerCase().includes(value);
				exercise.element.classList.toggle("hide", !isVisible);
			});
			console.log(exercisesArray);
		});

		let url = "https://exercisedb.p.rapidapi.com/exercises?limit=100&offset=400";
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
					return { name: exercise.name, bodyPart: exercise.bodyPart, element: card };
				});
			})
			.catch((error) => console.log(error));
	};

	pageButton6.onclick = function(){

		exerciseCardContainer.innerHTML = "";

		filterExercise("all");
		searchInput.addEventListener("input", (e) => {
			const value = e.target.value.toLowerCase();
			exercisesArray.forEach((exercise) => {
				const isVisible = exercise.name.toLowerCase().includes(value);
				exercise.element.classList.toggle("hide", !isVisible);
			});
			console.log(exercisesArray);
		});

		let url = "https://exercisedb.p.rapidapi.com/exercises?limit=100&offset=500";
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
					return { name: exercise.name, bodyPart: exercise.bodyPart, element: card };
				});
			})
			.catch((error) => console.log(error));
	};

	pageButton7.onclick = function(){

		exerciseCardContainer.innerHTML = "";

		filterExercise("all");
		searchInput.addEventListener("input", (e) => {
			const value = e.target.value.toLowerCase();
			exercisesArray.forEach((exercise) => {
				const isVisible = exercise.name.toLowerCase().includes(value);
				exercise.element.classList.toggle("hide", !isVisible);
			});
			console.log(exercisesArray);
		});

		let url = "https://exercisedb.p.rapidapi.com/exercises?limit=100&offset=600";
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
					return { name: exercise.name, bodyPart: exercise.bodyPart, element: card };
				});
			})
			.catch((error) => console.log(error));
	};

	pageButton8.onclick = function(){

		exerciseCardContainer.innerHTML = "";
		
		filterExercise("all");
		searchInput.addEventListener("input", (e) => {
			const value = e.target.value.toLowerCase();
			exercisesArray.forEach((exercise) => {
				const isVisible = exercise.name.toLowerCase().includes(value);
				exercise.element.classList.toggle("hide", !isVisible);
			});
			console.log(exercisesArray);
		});

		let url = "https://exercisedb.p.rapidapi.com/exercises?limit=100&offset=700";
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
					return { name: exercise.name, bodyPart: exercise.bodyPart, element: card };
				});
			})
			.catch((error) => console.log(error));
	};

	pageButton9.onclick = function(){

		exerciseCardContainer.innerHTML = "";

		filterExercise("all");
		searchInput.addEventListener("input", (e) => {
			const value = e.target.value.toLowerCase();
			exercisesArray.forEach((exercise) => {
				const isVisible = exercise.name.toLowerCase().includes(value);
				exercise.element.classList.toggle("hide", !isVisible);
			});
			console.log(exercisesArray);
		});

		let url = "https://exercisedb.p.rapidapi.com/exercises?limit=100&offset=800";
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
					return { name: exercise.name, bodyPart: exercise.bodyPart, element: card };
				});
			})
			.catch((error) => console.log(error));
	};

	pageButton10.onclick = function(){

		exerciseCardContainer.innerHTML = "";

		filterExercise("all");
		searchInput.addEventListener("input", (e) => {
			const value = e.target.value.toLowerCase();
			exercisesArray.forEach((exercise) => {
				const isVisible = exercise.name.toLowerCase().includes(value);
				exercise.element.classList.toggle("hide", !isVisible);
			});
			console.log(exercisesArray);
		});

		let url = "https://exercisedb.p.rapidapi.com/exercises?limit=100&offset=900";
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
					return { name: exercise.name, bodyPart: exercise.bodyPart, element: card };
				});
			})
			.catch((error) => console.log(error));
	};

	pageButton11.onclick = function(){

		exerciseCardContainer.innerHTML = "";

		filterExercise("all");
		searchInput.addEventListener("input", (e) => {
			const value = e.target.value.toLowerCase();
			exercisesArray.forEach((exercise) => {
				const isVisible = exercise.name.toLowerCase().includes(value);
				exercise.element.classList.toggle("hide", !isVisible);
			});
			console.log(exercisesArray);
		});

		let url = "https://exercisedb.p.rapidapi.com/exercises?limit=100&offset=1000";
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
					return { name: exercise.name, bodyPart: exercise.bodyPart, element: card };
				});
			})
			.catch((error) => console.log(error));
	};

	pageButton12.onclick = function(){

		exerciseCardContainer.innerHTML = "";

		filterExercise("all");
		searchInput.addEventListener("input", (e) => {
			const value = e.target.value.toLowerCase();
			exercisesArray.forEach((exercise) => {
				const isVisible = exercise.name.toLowerCase().includes(value);
				exercise.element.classList.toggle("hide", !isVisible);
			});
			console.log(exercisesArray);
		});

		let url = "https://exercisedb.p.rapidapi.com/exercises?limit=100&offset=1100";
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
					return { name: exercise.name, bodyPart: exercise.bodyPart, element: card };
				});
			})
			.catch((error) => console.log(error));
	};

	pageButton13.onclick = function(){

		exerciseCardContainer.innerHTML = "";

		filterExercise("all");
		searchInput.addEventListener("input", (e) => {
			const value = e.target.value.toLowerCase();
			exercisesArray.forEach((exercise) => {
				const isVisible = exercise.name.toLowerCase().includes(value);
				exercise.element.classList.toggle("hide", !isVisible);
			});
			console.log(exercisesArray);
		});

		let url = "https://exercisedb.p.rapidapi.com/exercises?limit=100&offset=1200";
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
					return { name: exercise.name, bodyPart: exercise.bodyPart, element: card };
				});
			})
			.catch((error) => console.log(error));
	};

	pageButton14.onclick = function(){

		exerciseCardContainer.innerHTML = "";

		filterExercise("all");
		searchInput.addEventListener("input", (e) => {
			const value = e.target.value.toLowerCase();
			exercisesArray.forEach((exercise) => {
				const isVisible = exercise.name.toLowerCase().includes(value);
				exercise.element.classList.toggle("hide", !isVisible);
			});
			console.log(exercisesArray);
		});

		let url = "https://exercisedb.p.rapidapi.com/exercises?limit=100&offset=1300";
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
					return { name: exercise.name, bodyPart: exercise.bodyPart, element: card };
				});
			})
			.catch((error) => console.log(error));
	};

	function filterExercise (value) {
		let buttons = document.querySelectorAll('.filter-button');
		buttons.forEach((button) => {
			if (value.toLowerCase() == button.innerText.toLowerCase()) {
				button.classList.add('filter-button-active');
			}
			else {
				button.classList.remove('filter-button-active');
			}
		});

		if(value == "all") {
			exercisesArray.forEach((exercise) => {
				exercise.element.classList.remove("hide");
			});
			searchInput.value = "";
		}
		else 
		{
			exercisesArray.forEach((exercise) => {
				const isVisible = exercise.bodyPart.toLowerCase().includes(value);
				exercise.element.classList.toggle("hide", !isVisible);
			});
			searchInput.value = "";
		}

	};

	/*document.querySelectorAll('.p-button').forEach(button => {
		switch(button.value){
			case 1:
				button.addEventListener('click', event => {
					searchInput.addEventListener("input", (e) => {
						const value = e.target.value.toLowerCase();
						exercisesArray.forEach((exercise) => {
							const isVisible = exercise.name.toLowerCase().includes(value);
							exercise.element.classList.toggle("hide", !isVisible);
						});
						console.log(exercisesArray);
					});
					
					let url = "https://exercisedb.p.rapidapi.com/exercises?limit=100";
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
				})
				break;
		}
	  })*/

	/*searchInput.addEventListener("input", (e) => {
		const value = e.target.value.toLowerCase();
		exercisesArray.forEach((exercise) => {
			const isVisible = exercise.title.toLowerCase().includes(value);
			exercise.element.classList.toggle("hide", !isVisible);
		});
		console.log(exercisesArray);
	});

fetch("https://dummyjson.com/products")
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
});*/