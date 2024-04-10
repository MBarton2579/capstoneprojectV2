const exerciseCardTemplate = document.querySelector("[data-exercise-card-template]")
const exerciseCardContainer = document.querySelector("[data-exercise-card-container]")
const searchInput = document.querySelector("[data-filter]")

let exercisesArray = []

searchInput.addEventListener("input", e => {
	const value = e.target.value.toLowerCase()
	exercisesArray.forEach(exercise => {
		const isVisible = exercise.title.toLowerCase().includes(value)
		exercise.element.classList.toggle("hide", !isVisible)
	})
	console.log(exercisesArray)
})

	/*let url = 'https://exercisedb.p.rapidapi.com/exercises?limit=1500';
    let options = {
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
		let cards = "";
		data.forEach((exercise) => {
			cards += `<div class="col"><div class="card exercise-card" style="width: 18rem; height: 500px;">
        <img src="${exercise.gifUrl}" class="card-img-top catalog-img" alt="${exercise.name}"/>
        <div class="card-body">
				<div class="card-description-top">
          <h5 class="card-title">${exercise.name}</h5>
          <p class="card-text">Hello</p>
					</div>
					<hr>
          <div class="row card-description-bottom">
					<p class="col-6 card-description-col"><label>Body Part: </label><span>${exercise.bodyPart}</span></p>
					<p class="col-6 card-description-col"><label>Equipment: </label><span>${exercise.equipment}</span></p>
           <p class="col card-description-col"><label>Target Area: </label><span>${exercise.target}</span></p>
						<p class="col card-description-col"><label>Secondary Muscles: </label><span>${exercise.secondaryMuscles}</span></p>
					</div>
					<div class="view-exercise-button">
          <a href="#" class="btn btn-primary">View Exercise</a>
					</div>
        </div>
      </div></div>`;
		});
		document.getElementById("exercise-cards").innerHTML = cards;
	})
	.catch((error) => console.log(error));*/

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
})