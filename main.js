document.addEventListener(`DOMContentLoaded`, ()=> {
    let origin = document.getElementById('fromPlaces');
    new google.maps.places.Autocomplete(origin);
    let destination = document.getElementById(`toPlaces`);
    new google.maps.places.Autocomplete(destination);
})
