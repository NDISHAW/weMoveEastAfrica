//Set defult location on map
let myLatLng={lat: 1.9577,lng: 37.2972};
let mapOptions={
    center:myLatLng,
    zoom:7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

//CREATE MAP
let map = new google.maps.Map(document.getElementById(`googleMap`), mapOptions);
//CREATE A DIRECTIONS SERVICE
let directionsService = new google.maps.DirectionsService();
//render object to display route
let directionsDisplay = new google.maps.DirectionsRenderer();
directionsDisplay.setMap(map);
//calculateroute
function calcRoute() {
    //create a request
    let request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }
    directionsService.route(request,  (result, status)=> {
        if (status == google.maps.DirectionsStatus.OK) {
            //getting distance and time
            const output = document.querySelector('#output');
            output.innerHTML = "<div class='alert-info'>From: " + document.getElementById("from").value + ".<br />To: " + document.getElementById("to").value + ".<br /> Driving distance <i class='fas fa-road'></i> : " + result.routes[0].legs[0].distance.text + ".<br />Duration <i class='fas fa-hourglass-start'></i> : " + result.routes[0].legs[0].duration.text + ".</div>";

            //display route
            directionsDisplay.setDirections(result);
        }
    });

}
let options={
    types:[`(cities)`]
}
let input1 = new google.maps.places.Autocomplete(
    document.getElementById('from'));
let input2 = new google.maps.places.Autocomplete(document.getElementById(`to`));

// //Set autoComplete on the inputs
// document.addEventListener(`DOMContentLoaded`, () => {
//     let input1 = new google.maps.places.Autocomplete(
//         document.getElementById('from'));
//     let input2 = new google.maps.places.Autocomplete(document.getElementById(`to`));
// })