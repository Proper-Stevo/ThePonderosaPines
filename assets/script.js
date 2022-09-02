var input = document.querySelector('#inpt');
var button = document.querySelector('#searchBtn');

var apiKey = '60tnQ2dzLAkLf73fsvhdfvhec1KAxFeawuS3TRTS';

var weatherKey = 'eee36fb31545951ee6937b387f4442d1';

var box = document.querySelector(".box")
var box2 = $(".box")
console.log (box)

function searchBar(event){
    event.preventDefault();
    console.log(input.value);
    input.style.display= "none";
    button.style.display= "none";

    var apiurl = `https://developer.nps.gov/api/v1/parks?q=${input.value}&api_key=${apiKey}`;
    // var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}=${input.value}&weather_key=${weatherKey}';

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
// function getWeather(city){
//     var urlBaseCityName = "https://api.openweathermap.org/data/2.5/weather?appid=b650042e3a82aa70290734a60a8cb3e3&q="+city+"&units=imperial";
//     console.log("success link00",urlBaseCityName);
//     $(".sidepanel").attr("style","display:block");
//     $("#sidepanel").delay(800).fadeIn();
//     $.ajax({
//       url:urlBaseCityName,
//       type:"GET",
//       success:function(cityWeatherInfo){
  
//            $("#location").html("Location:");
//            $("#icon").html(`<img src='https://openweathermap.org/img/w/${cityWeatherInfo.weather[0].icon}.png'>`);
//            $("#locationName").html(cityWeatherInfo.name);
//            $("#tempature").html("Tempature: "+Math.floor(cityWeatherInfo.main.temp)+" &#8457");
//            $("#humidity").html("Humidity: "+JSON.stringify(cityWeatherInfo.main.humidity)+"%");
//            $("#wind").html("Wind speed : "+JSON.stringify(cityWeatherInfo.wind.speed)+" m/s");
//       }
//       });
//           }
  

//           function getUV (lat, lon) {
//             // API call to get UV data and post data to the DOM
//           var key = "b650042e3a82aa70290734a60a8cb3e3";
//           var uvQuery = "https://api.openweathermap.org/data/2.5/uvi/forecast?appid=" + key + "&lat=" + lat + "&lon=" + lon;
//           console.log(uvQuery)
//           console.log(lat,lon)
          
//             $.ajax({
//                 url: uvQuery,
//                 method: "GET"
//               }).then(function(response) {
//                 $("#uvIndex").text("UV Index: " + (response[0].value));
//                 var uv = response[0].value;
//                 if (uv < 3) { 
//                     $("#uvIndex").removeClass()
//                     $("#uvIndex").addClass("new badge green")
//                   } else if (uv < 7) { 
//                     $("#uvIndex").removeClass()
//                     $("#uvIndex").addClass("new badge yellow")
//                   } else if (uv < 11) { 
//                     $("#uvIndex").removeClass()
//                     $("#uvIndex").addClass("new badge red")
//                   }
//               });
//             } 
// fetch api
// results

// divs

// function searchBar(event){
//     event.preventDefault();
//     console.log("test");
// }
button.addEventListener('click', searchBar);
