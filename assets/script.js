var input = document.querySelector('#inpt');
var button = document.querySelector('#searchBtn');


// input form event listeners/functions

// fetch api
// results

// divs

function searchBar(event){
    event.preventDefault();
    console.log("test");
// INPUT AND SEARCH BUTTON DISAPPEAR WHEN CLICKED
    input.style.display= "none";
    button.style.display= "none";



}
button.addEventListener('click', searchBar);

var apiKey = 'M8SMVMpQtd5nLVLJvfbiAwx0lmXDa9dKkuCLRuq8';

var apiUrl = 'https://developer.nps.gov/api/v1/parks?q=&api_key'+ apiKey;

var box = document.querySelector("#display")
var box2 = $("#box")
console.log(box)


        
        fetch(apiUrl)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)
            var h1el = document.createElement("h1")

            h1el.textContent= data.title
            h1el.style.color = "red"
            h1el.style.margin= "20p "
            box.append(h1el)

            })


function handleSearchFormSubmit(event) {
    event.preventDefault();
}

input.addEventListener("submit", handleSearchFormSubmit);
