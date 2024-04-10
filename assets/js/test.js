//attempt to create the availableKeywords array (failed: promises do not return a value)
function exerciseNames() {
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
            const keywords = [];
            data.forEach((exercise) => {
                keywords.push(exercise.name);
                //console.log(keywords);
            });
            return keywords;
        })
        .then((keywords) => {
            const availableKeywords = keywords;
            return availableKeywords;
        })
        //.then((availableKeywords) => console.log(availableKeywords))
        .catch((error) => console.log(error));
        //let availableKeywords = keywords;
        //console.log(availableKeywords);
}
//attempt end

function stringToArray(str) {
    return str.trim().split(" ");
}

/*fetch("https://dummyjson.com/products")
	//.then(res => console.log(res))
	.then((response) => {
		return response.json();
	})
	.then((res) => {
		const data = res.products;
		let cards = "";
		productsArray = data.map((product) => {
			cards += `<div class="col"><div class="card exercise-card" style="width: 18rem; height: 500px;">
        <img src="${product.thumbnail}" class="card-img-top catalog-img" alt="${product.title}"/>
        <div class="card-body">
				<div class="card-description-top">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.description}</p>
					</div>
					<hr>
          <div class="row card-description-bottom">
					<p class="col-6 card-description-col"><label>Name: </label><span>Hi</span></p>
					<p class="col-6 card-description-col"><label>Area: </label><span>Hello</span></p>
           <p class="col card-description-col"><label>Name: </label><span>Hi</span></p>
						<p class="col card-description-col"><label>Area: </label><span>Hello</span></p>
					</div>
					<div class="view-exercise-button">
          <a href="#" class="btn btn-primary">View Exercise</a>
					</div>
        </div>
      </div></div>`;
	  return {title: product.title, description: product.description}
		});
		document.getElementById("exercise-cards").innerHTML = cards;
	})
	.catch((error) => console.log(error));*/
