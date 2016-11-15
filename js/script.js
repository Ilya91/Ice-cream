
var itemsDelete = document.querySelectorAll(".cart-cross-delete");

for(var i = 0; i < itemsDelete.length; i++){
    var itemDelete = itemsDelete[i];
    itemDelete.addEventListener('click', function () {
        var product = this.parentNode;
        product.parentNode.removeChild(product);
    });
}


function initialize() {
    var x = 59.9397377;
    var y = 30.3211327;
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(x, y),
        scrollwheel: false,
        disableDefaultUI: true
    }
    var map = new  google.maps.Map(
        document.querySelector("#map"),
        mapOptions
    );
    var image = "img/pin.png";
    var myLatLng = new google.maps.LatLng(x, y);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });/*
    var styles = [
        {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "saturation": -100
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "saturation": -100
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "saturation": -10
                },
                {
                    "lightness": 30
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "saturation": -60
                },
                {
                    "lightness": 10
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "saturation": -60
                },
                {
                    "lightness": 60
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "saturation": -100
                },
                {
                    "lightness": 60
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "saturation": -100
                },
                {
                    "lightness": 60
                }
            ]
        }
    ];
    map.setOptions({styles: styles});*/
}
google.maps.event.addDomListener(window, "load", initialize);
