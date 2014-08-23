function setLocation (e) {
    Ti.API.info("Annotation " + e.title + " clicked, id: " + e.annotation.myid);
    $.mapview.setLocation({
        latitude: 32.8245525,
        longitude: -117.0951632,
        animate: true,
    });
}

$.window.open();
