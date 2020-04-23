function initMap() {
    var United_Kingdom = {
        lat: 51.494761,
        lng: -0.100426
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: United_Kingdom,
        zoom: 11,
        mapTypeId: 'roadmap',
        /* mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        } */
    });
}