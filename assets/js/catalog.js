fetch("https://dummyjson.com/products")
	//.then(res => console.log(res))
	.then((response) => response.json())
	.then((res) => {
		const data = res.products;
		let cards = "";
		data.forEach((product) => {
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
		});
		document.getElementById("exercise-cards").innerHTML = cards;
	})
	.catch((error) => console.log(error));
