state = store.getState()

shape = state.mapcontent.present.geojson.filter(feature => feature.name === 'shape')[0].geojson
coastlines = state.mapcontent.present.geojson.filter(feature => feature.name === 'coastlines')[0].geojson

bbox = turf.bbox(shape)

var [minX, minY, maxX, maxY] = bbox;

var clipBox = [
    Math.floor(minX/10)*10,
    Math.floor(minY/10)*10,
    Math.ceil(maxX/10)*10,
    Math.ceil(maxY/10)*10
]

var poly = turf.polygon([[[2, 2], [8, 4], [12, 8], [3, 7], [2, 2]]]);

var poly = coastlines.geometries[0];
clipped = turf.bboxClip(poly, clipBox);

console.log('bbox', bbox)
console.log('clipBox', clipBox)

var feature = {
    type: 'geojson',
    name: 'coastlines-clipped',
    stroke: '#000',
    strokeWidth: 1,
    fill: 'rgba(0, 219, 0, 0.2)',
    geojson: {clipped}
};

// store.dispatch(addContent(feature));


