//Autofill SearchBar
let availableKeywords = [
    "Hi",
    "Hello",
    "Bye",
    "Good Riddens",
    "Go Home",
    "What Up"
  ];
  
  const resultsBox = document.querySelector(".result-box");
  const inputBox = document.getElementById("search-input-box");
  
  inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
      result = availableKeywords.filter((keyword) => {
        return keyword.toLowerCase().includes(input.toLowerCase());
      });
      console.log(result);
    }
    display(result);

    if (!result.length) {
        resultsBox.innerHTML = '';
    }
  };
  
  function display(result) {
    const content = result.map((list) => {
      return "<li onclick= selectInput(this)>" + list + "</li>";
    });
  
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
  };

  function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
  };
//End of Autofill SearchBar

//Load Available Keywords for Autofill
/*async function loadKeyWords(){
const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=1500';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '92cea14e71mshe5748deae4744b4p18dc2ejsncf5223be45e9',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
};*/

/*let url2 = 'https://exercisedb.p.rapidapi.com/exercises?limit=1500';
let options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '92cea14e71mshe5748deae4744b4p18dc2ejsncf5223be45e9',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

const fetchedExercises = fetch(url2, options2)
	//.then(res => console.log(res))
  .then((response) => response.json())
  .then(res => console.log(res));
};*/

	/*.then((response) => response.json())
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
	.catch((error) => console.log(error));*/