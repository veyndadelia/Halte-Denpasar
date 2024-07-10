var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_Denpasar_1 = new ol.format.GeoJSON();
var features_Denpasar_1 = format_Denpasar_1.readFeatures(json_Denpasar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Denpasar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Denpasar_1.addFeatures(features_Denpasar_1);
var lyr_Denpasar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Denpasar_1, 
                style: style_Denpasar_1,
                popuplayertitle: "Denpasar",
                interactive: true,
    title: 'Denpasar<br />\
    <img src="styles/legend/Denpasar_1_0.png" /> Denpasar Barat<br />\
    <img src="styles/legend/Denpasar_1_1.png" /> Denpasar Selatan<br />\
    <img src="styles/legend/Denpasar_1_2.png" /> Denpasar Timur<br />\
    <img src="styles/legend/Denpasar_1_3.png" /> Denpasar Utara<br />'
        });
var format_Halte_Denpasar_2 = new ol.format.GeoJSON();
var features_Halte_Denpasar_2 = format_Halte_Denpasar_2.readFeatures(json_Halte_Denpasar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Halte_Denpasar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halte_Denpasar_2.addFeatures(features_Halte_Denpasar_2);
var lyr_Halte_Denpasar_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Halte_Denpasar_2, 
                style: style_Halte_Denpasar_2,
                popuplayertitle: "Halte_Denpasar",
                interactive: true,
    title: 'Halte_Denpasar<br />\
    <img src="styles/legend/Halte_Denpasar_2_0.png" /> Halte<br />'
        });

lyr_Positronretina_0.setVisible(true);lyr_Denpasar_1.setVisible(true);lyr_Halte_Denpasar_2.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_Denpasar_1,lyr_Halte_Denpasar_2];
lyr_Denpasar_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Desa_Lurah': 'Desa_Lurah', 'Kecamatan': 'Kecamatan', 'Kota': 'Kota', 'Luas_m2': 'Luas_m2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Sumber': 'Sumber', });
lyr_Halte_Denpasar_2.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Nama': 'Nama', 'Alamat': 'Alamat', 'foto': 'foto', });
lyr_Denpasar_1.set('fieldImages', {'OBJECTID': 'Range', 'Desa_Lurah': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kota': 'TextEdit', 'Luas_m2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Sumber': 'TextEdit', });
lyr_Halte_Denpasar_2.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'foto': 'ExternalResource', });
lyr_Denpasar_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'Desa_Lurah': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Kota': 'inline label - always visible', 'Luas_m2': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Sumber': 'hidden field', });
lyr_Halte_Denpasar_2.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'Nama': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'foto': 'no label', });
lyr_Halte_Denpasar_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});