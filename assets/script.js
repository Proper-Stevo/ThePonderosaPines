var input = document.querySelector('#inpt');
var button = document.querySelector('#searchBtn');

var apiKey = '60tnQ2dzLAkLf73fsvhdfvhec1KAxFeawuS3TRTS';

var findweather = () => {
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=e5802abdcd0d7206f1acd96df13f647a')
    .then(data => data.json())
    .then((data) => console.log(data))
};
findweather;

var box = document.querySelector(".box")
var box2 = $(".box")
console.log (box)

function searchBar(event){
    event.preventDefault();
    console.log(input.value);
    input.style.display= "none";
    button.style.display= "none";

    var apiurl = `https://developer.nps.gov/api/v1/parks?q=${input.value}&api_key=${apiKey}`;

fetch(apiurl)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    var h1El = document.createElement("h1")
    var h2El = document.createElement("h2")
    var imageEl = document.createElement("img")
    var pEl = document.createElement("p")

    imageEl.setAttribute("src", data.data[0].images[0].url)
    imageEl.setAttribute("class", "image")
    box.append(imageEl)

    // h1El.textContent=data.data[0].description
    // h1El.style.color = "white"
    // h1El.style.margin = "20px"
    // box.append(h1El)

    pEl.textContent=data.data[0].operatingHours[0].description
    pEl.setAttribute("class", "operating")
    box.append(pEl)

    var contacts = data.data
    for(var i = 0; i < 1; i++){
        var h2El = document.createElement("h2")
        h2El.textContent = contacts[i].description
        h2El.setAttribute("class", "description")
        box.append(h2El)
}

})
}
// input form event listeners/functions

// fetch api
// results

// divs

// function searchBar(event){
//     event.preventDefault();
//     console.log("test");
// }
button.addEventListener('click', searchBar);
