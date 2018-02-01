let maps = document.getElementById('map');
// Your Location will show in initial map

function initMap() {
    let options = {
        zoom: 10,
        // Your Location will show in initial map
        center: {lat: -6.1751, lng: 106.8650}
    };

    // Arrat of markers
    let markers = [
        {
            coords: {lat: -6.1751, lng: 106.8650},
            iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content: '<h1>Ini Jakarta</h1>'
        },
        {
            coords: {lat: -6.4025, lng: 106.7942},
            content: '<h1>This is Depok</h1>'
        
        },
        {
            coords: {lat: -6.2383, lng: 106.9756},
            content: '<h1>This is Bekasi</h1>'
        }

    ]

    let map = new google.maps.Map(maps, options);

    // Listen for click a map, add marker on map wherever we click
    google.maps.event.addListener(map, 'click', function(event) {
        // Add Marker
        addMarker({coords: event.latLng});
    })

    // Add Marker
    /* 
    let marker = new google.maps.Marker({
        position: {lat: -6.1751, lng: 106.8650},
        map: map
    })

    let infoWindow = new google.maps.InfoWindow({
        content: '<h2>Jakarta Pusat</h1>'
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    }) 
    */

    // loop through markers using forEach
    markers.forEach( (m) => {
        addMarker(m);
    })

    // Add marker function
    function addMarker(props) {
        let marker = new google.maps.Marker({
            position: props.coords,
            map: map,
        })

        //check for custom icon
        // If icon has certain image, set icon to it, otherwise set into default icon 

        if (props.iconImage) {
            marker.setIcon(props.iconImage);
        }

        // check content
        if (props.content) {
            // console.log(props.content)
            let infoWindow = new google.maps.InfoWindow({
                content: props.content
            });
        
            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            }) 
        }
    }
};