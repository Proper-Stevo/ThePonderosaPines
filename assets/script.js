var input = document.querySelector('#inpt');
var button = document.querySelector('#searchBtn');

var header = document.querySelector('.project-header');
var footer = document.querySelector('footer');

var apiKey = '60tnQ2dzLAkLf73fsvhdfvhec1KAxFeawuS3TRTS';

// 1st page, 2nd page
var box = document.querySelector(".box")
var box2 = $(".box")
console.log (box)
// click searchbar
function searchBar(event){
    event.preventDefault();
    console.log(input.value);
// INPUT AND SEARCH BUTTON DISAPPEAR WHEN CLICKED
    input.style.display= "none";
    button.style.display= "none";
    // header.style.display= "none";
    footer.style.display= "none";
    

    var apiurl = `https://developer.nps.gov/api/v1/parks?q=${input.value}&api_key=${apiKey}`; 


fetch(apiurl)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data.data[0])
    var h1El = document.createElement("h1")
    var h2El = document.createElement("h2")
    var imageEl = document.createElement("img")
    var pEl = document.createElement("p")


    imageEl.setAttribute("src", data.data[0].images[0].url)
    imageEl.setAttribute("class", "image")
    box.append(imageEl)

    h1El.textContent=data.data[0].description
    h1El.style.color = "white"
    h1El.style.margin = "20px"
    box.append(h1El)
   
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

button.addEventListener('click', searchBar);
