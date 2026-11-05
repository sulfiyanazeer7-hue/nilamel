var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Nilamel_Ward_Boundary_1 = new ol.format.GeoJSON();
var features_Nilamel_Ward_Boundary_1 = format_Nilamel_Ward_Boundary_1.readFeatures(json_Nilamel_Ward_Boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nilamel_Ward_Boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nilamel_Ward_Boundary_1.addFeatures(features_Nilamel_Ward_Boundary_1);
var lyr_Nilamel_Ward_Boundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nilamel_Ward_Boundary_1, 
                style: style_Nilamel_Ward_Boundary_1,
                popuplayertitle: 'Nilamel_Ward_Boundary',
                interactive: false,
                title: '<img src="styles/legend/Nilamel_Ward_Boundary_1.png" /> Nilamel_Ward_Boundary'
            });
var format_Clipped_2 = new ol.format.GeoJSON();
var features_Clipped_2 = format_Clipped_2.readFeatures(json_Clipped_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_2.addFeatures(features_Clipped_2);
var lyr_Clipped_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_2, 
                style: style_Clipped_2,
                popuplayertitle: 'Clipped',
                interactive: false,
                title: '<img src="styles/legend/Clipped_2.png" /> Clipped'
            });
var format_Clipped_3 = new ol.format.GeoJSON();
var features_Clipped_3 = format_Clipped_3.readFeatures(json_Clipped_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_3.addFeatures(features_Clipped_3);
var lyr_Clipped_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_3, 
                style: style_Clipped_3,
                popuplayertitle: 'Clipped',
                interactive: false,
                title: '<img src="styles/legend/Clipped_3.png" /> Clipped'
            });
var format_Clipped_4 = new ol.format.GeoJSON();
var features_Clipped_4 = format_Clipped_4.readFeatures(json_Clipped_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_4.addFeatures(features_Clipped_4);
var lyr_Clipped_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_4, 
                style: style_Clipped_4,
                popuplayertitle: 'Clipped',
                interactive: false,
                title: '<img src="styles/legend/Clipped_4.png" /> Clipped'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Nilamel_Ward_Boundary_1.setVisible(true);lyr_Clipped_2.setVisible(true);lyr_Clipped_3.setVisible(true);lyr_Clipped_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Nilamel_Ward_Boundary_1,lyr_Clipped_2,lyr_Clipped_3,lyr_Clipped_4];
lyr_Nilamel_Ward_Boundary_1.set('fieldAliases', {'WARD_NO': 'WARD_NO', 'WARD_NAME': 'WARD_NAME', 'LOCALBODY': 'LOCALBODY', 'DISTRICT': 'DISTRICT', });
lyr_Clipped_2.set('fieldAliases', {'comment': 'comment', 'highway': 'highway', 'horse': 'horse', 'lanes': 'lanes', 'layer': 'layer', 'maxspeed': 'maxspeed', 'maxspeed_b': 'maxspeed_b', 'maxspeed_g': 'maxspeed_g', 'maxspeed_h': 'maxspeed_h', 'maxspeed_m': 'maxspeed_m', 'maxspeed_1': 'maxspeed_1', 'maxspeed_t': 'maxspeed_t', 'motor_vehi': 'motor_vehi', 'name': 'name', 'name_ml': 'name_ml', 'oneway': 'oneway', 'ref': 'ref', 'service': 'service', 'sidewalk': 'sidewalk', 'smoothness': 'smoothness', 'source': 'source', 'surface': 'surface', 'id': 'id', 'access': 'access', 'alt_name': 'alt_name', 'bicycle': 'bicycle', 'bridge': 'bridge', 'culvert': 'culvert', 'cycleway': 'cycleway', 'foot': 'foot', 'footway': 'footway', 'ford': 'ford', 'junction': 'junction', });
lyr_Clipped_3.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_Clipped_4.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_Nilamel_Ward_Boundary_1.set('fieldImages', {'WARD_NO': 'Range', 'WARD_NAME': 'TextEdit', 'LOCALBODY': 'TextEdit', 'DISTRICT': 'TextEdit', });
lyr_Clipped_2.set('fieldImages', {'comment': '', 'highway': '', 'horse': '', 'lanes': '', 'layer': '', 'maxspeed': '', 'maxspeed_b': '', 'maxspeed_g': '', 'maxspeed_h': '', 'maxspeed_m': '', 'maxspeed_1': '', 'maxspeed_t': '', 'motor_vehi': '', 'name': '', 'name_ml': '', 'oneway': '', 'ref': '', 'service': '', 'sidewalk': '', 'smoothness': '', 'source': '', 'surface': '', 'id': '', 'access': '', 'alt_name': '', 'bicycle': '', 'bridge': '', 'culvert': '', 'cycleway': '', 'foot': '', 'footway': '', 'ford': '', 'junction': '', });
lyr_Clipped_3.set('fieldImages', {'NAME': '', 'TYPE1': '', 'TYPE2': '', });
lyr_Clipped_4.set('fieldImages', {'ORDER1': '', });
lyr_Nilamel_Ward_Boundary_1.set('fieldLabels', {'WARD_NO': 'no label', 'WARD_NAME': 'no label', 'LOCALBODY': 'no label', 'DISTRICT': 'no label', });
lyr_Clipped_2.set('fieldLabels', {'comment': 'no label', 'highway': 'no label', 'horse': 'no label', 'lanes': 'no label', 'layer': 'no label', 'maxspeed': 'no label', 'maxspeed_b': 'no label', 'maxspeed_g': 'no label', 'maxspeed_h': 'no label', 'maxspeed_m': 'no label', 'maxspeed_1': 'no label', 'maxspeed_t': 'no label', 'motor_vehi': 'no label', 'name': 'no label', 'name_ml': 'no label', 'oneway': 'no label', 'ref': 'no label', 'service': 'no label', 'sidewalk': 'no label', 'smoothness': 'no label', 'source': 'no label', 'surface': 'no label', 'id': 'no label', 'access': 'no label', 'alt_name': 'no label', 'bicycle': 'no label', 'bridge': 'no label', 'culvert': 'no label', 'cycleway': 'no label', 'foot': 'no label', 'footway': 'no label', 'ford': 'no label', 'junction': 'no label', });
lyr_Clipped_3.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_Clipped_4.set('fieldLabels', {'ORDER1': 'no label', });
lyr_Clipped_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});