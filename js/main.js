if (navigator.userAgent.indexOf('Firefox') != -1 ){ //user-agent verification
    document.getElementById('mainstyle').setAttribute('href', 'css/main-ff.css');
} else {
    document.getElementById('mainstyle').setAttribute('href', 'css/main-ch.css');
}

var map = L.map('mapid', {
    crs: L.CRS.Simple,
    minZoom: -1,
    maxZoom: 2,
});

map.attributionControl.setPrefix('<a href="https://spacestation13.fr">Dalbarade 3.1 - Curiestation</a>');

var bounds = [[0,0], [1919,992]];

var etagesImages = {
    passerelle: L.imageOverlay('medias/Dalbarade_1.png', bounds),
    pontSup: L.imageOverlay('medias/Dalbarade_2.png', bounds),
    pontInf: L.imageOverlay('medias/Dalbarade_3.png', bounds),
    soute: L.imageOverlay('medias/Dalbarade_4.png', bounds),
};

var etages = {
    'Passerelle':etagesImages.passerelle,
    'Pont Supérieur':etagesImages.pontSup,
    'Pont Inférieur':etagesImages.pontInf,
    'Soute':etagesImages.soute,
};

map.addLayer(etagesImages.passerelle);
map.fitBounds(bounds);
L.control.layers(etages).addTo(map);