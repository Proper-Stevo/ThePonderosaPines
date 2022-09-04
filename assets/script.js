var input = document.querySelector('#inpt');
var button = document.querySelector('#searchBtn');
var header = document.querySelector('.project-header');
var footer = document.querySelector('footer');

var apiKey = '60tnQ2dzLAkLf73fsvhdfvhec1KAxFeawuS3TRTS';

var weatherKey = 'a92be1494d3c0baec600da80d7ff753c';

var box = document.querySelector(".box")
var box2 = $(".box")
console.log (box)

function searchBar(event){
    event.preventDefault();
    console.log(input.value);
    input.style.display= "none";
    button.style.display= "none";
    header.style.display= "none";
    footer.style.display= "none";
    var apiurl = `https://developer.nps.gov/api/v1/parks?q=${input.value}&api_key=${apiKey}`;

fetch(apiurl)
.then(function(response){
    return response.json()

    
})



.then(function(data){
    console.log(data.data[0])
    console.log(data.data[0].latitude)
    console.log(data.data[0].longitude)
    var h1El = document.createElement("h1")
    var h2El = document.createElement("h2")
    var imageEl = document.createElement("img")
    var pEl = document.createElement("p")

    imageEl.setAttribute("src", data.data[0].images[0].url)
    imageEl.setAttribute("class", "image")
    box.append(imageEl)


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
      
    var weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + data.data[0].latitude + '&lon=' + data.data[0].longitude + '&appid=cfe0b2658aec5af16bf8115cfd986eca&units=imperial';
    fetch(weatherUrl)
    .then(res => res.json())
    .then(weatherData => {
        console.log(weatherData)
        var p = document.createElement("p")
        p.textContent = "Tempature: " + weatherData.current.temp
        var append2El = document.querySelector(".operating")
        append2El.append(p)
        var p = document.createElement("p")
        p.textContent = "Humidity: " + weatherData.current.humidity
        var append2El = document.querySelector(".operating")
        append2El.append(p)
    })

})
     }
button.addEventListener('click', searchBar);
