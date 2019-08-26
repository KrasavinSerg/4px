ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.22825857, 61.37538850],
    zoom: 16
  });

  var myPlacemark = new ymaps.Placemark([55.22825857, 61.37538850], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/pin-map.svg',
    iconImageSize: [38, 60],
    iconImageOffset: [-10, -60]
  });

  myMap.geoObjects.add(myPlacemark);
}
