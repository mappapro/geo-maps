#!/usr/bin/env bash

cmd="node ./node_modules/mapshaper/bin/mapshaper"
maps="/home/sven/projekte/mappa/geo-maps/maps"

# get germany
# curl https://nominatim.openstreetmap.org/details.php\?format\=json\&polygon_geojson\=1\&place_id\=198664929 -o germany.json
# manually extracted germany.geo.json

# the geojson from nominatim
src="germany.geo.json"
# the geojson without sea
dst="germany-coastlines.geo.json"

$cmd \
  -i ${src} \
  -clip ${maps}/earth-coastlines.geo.json \
  -o precision=0.000001 format=geojson ${dst} \
  -verbose \
