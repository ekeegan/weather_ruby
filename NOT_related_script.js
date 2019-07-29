let appId = 'ef99eb85e5b205e9cd0f9a781c33f1e0';
let units = 'imperial';
let searchMethod;

function getSearchMethod(searchTerm) {
  if(searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
      searchMethod = 'zip';
  else
      searchMethod = 'q';
}


function searchWeather(searchTerm) {
   getSearchMethod(searchTerm);
   fetch('https://api.openweathermap.org/data/2.5/weather?q=los angeles&mode=json&units=imperial&appid=ef99eb85e5b205e9cd0f9a781c33f1e0').then(result => {
	return result.json();
  }).then(result => {
        init(result);
  })
 }


function init(resultFromServer) {
    switch (resultFromServer.weather[0].main) {
     case 'Clear':
           document.body.style.backgroundImage = 'url("clear.jpg")';
           break;

     case 'Clouds':
           document.body.style.backgroundImage = 'url("cloudy.jpg")';
           break;

     case 'Rain':
     case 'Drizzle':
     case 'Mist':
           document.body.style.backgroundImage = 'url("rain.jpg")';
           break;

     case 'Thunderstorm':
           document.body.style.backgroundImage = 'url("storm.jpg")';
           break;

     case 'Snow':
           document.body.style.backgroundImage = 'url("snow.jpg")';
           break;

     default:
          break;
 }





document.getElementById('searchBtn').addEventListener('click', () => {
    let searchTerm = document.getElementById('searchInput').value;
    if(searchTerm)
       searchWeather(searchTerm);
})
