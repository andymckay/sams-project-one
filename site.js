function initMap() {
    // Centre of Canada.
    var myLatLng = {lat: 56.1304, lng: -106.3468};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 3.5,
      center: myLatLng,
      mapTypeId: 'satellite'
    });
  
    for (let element of document.getElementsByClassName("point")) {
        let marker = new google.maps.Marker({
            position: {lat: parseFloat(element.dataset.lat), lng: parseFloat(element.dataset.lng)},
            map: map,
            animation: google.maps.Animation.DROP,
            title: element.dataset.title,
            icon: {
                url: `https://maps.google.com/mapfiles/ms/icons/${element.dataset.icon}`
            },
            opacity: 0.8
        });
        marker.addListener("click", function() {
            for (let visible of document.getElementsByClassName("visible-point")) {
                visible.className = "hidden-point";
            }
            document.getElementById("blank-slate").className = "hidden";
            element.className = "visible-point";
        })
    }
}

document.getElementById("reset").addEventListener("click", function(e) {
    e.preventDefault();
    location.reload();
});