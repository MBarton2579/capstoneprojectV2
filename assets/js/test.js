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
console.log(stringToArray("Malachi Barton"))
