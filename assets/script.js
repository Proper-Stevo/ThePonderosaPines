var input = document.querySelector('#inpt');
var button = document.querySelector('#searchBtn');

var apiKey = '60tnQ2dzLAkLf73fsvhdfvhec1KAxFeawuS3TRTS'

var apiurl = `https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=${apiKey}`

var box = document.querySelector(".box")
var box2 = $(".box")
console.log (box)

function searchBar(event){
    event.preventDefault();
    // console.log("test");
    input.style.display= "none";
    button.style.display= "none";
}

fetch(apiurl)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    var h1El = document.createElement("h1")

    h1El.textContent=data.data[0].description
    h1El.style.color = "green"
    h1El.style.margin = "20px"
    box.append(h1El)
    var contacts = data.data
    for(var i = 0; i < contacts.length; i++){
        var h2El = document.createElement("h2")
        h2El.textContent = contacts[i].description
        h2El.setAttribute("class", "description")
        box.append(h2El)
}
})
// input form event listeners/functions

// fetch api
// results

// divs

// function searchBar(event){
//     event.preventDefault();
//     console.log("test");
// }
button.addEventListener('click', searchBar);
