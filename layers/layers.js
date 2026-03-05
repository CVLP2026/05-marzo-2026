var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AGEB_RURAL_Municipio_1 = new ol.format.GeoJSON();
var features_AGEB_RURAL_Municipio_1 = format_AGEB_RURAL_Municipio_1.readFeatures(json_AGEB_RURAL_Municipio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGEB_RURAL_Municipio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGEB_RURAL_Municipio_1.addFeatures(features_AGEB_RURAL_Municipio_1);
var lyr_AGEB_RURAL_Municipio_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGEB_RURAL_Municipio_1, 
                style: style_AGEB_RURAL_Municipio_1,
                popuplayertitle: 'AGEB_RURAL_ Municipio',
                interactive: false,
                title: '<img src="styles/legend/AGEB_RURAL_Municipio_1.png" /> AGEB_RURAL_ Municipio'
            });
var format_limite_mun_2 = new ol.format.GeoJSON();
var features_limite_mun_2 = format_limite_mun_2.readFeatures(json_limite_mun_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limite_mun_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limite_mun_2.addFeatures(features_limite_mun_2);
var lyr_limite_mun_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limite_mun_2, 
                style: style_limite_mun_2,
                popuplayertitle: 'limite_mun',
                interactive: true,
                title: '<img src="styles/legend/limite_mun_2.png" /> limite_mun'
            });
var format_AGEB_METROSTOTALES_20192024_3 = new ol.format.GeoJSON();
var features_AGEB_METROSTOTALES_20192024_3 = format_AGEB_METROSTOTALES_20192024_3.readFeatures(json_AGEB_METROSTOTALES_20192024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGEB_METROSTOTALES_20192024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGEB_METROSTOTALES_20192024_3.addFeatures(features_AGEB_METROSTOTALES_20192024_3);
var lyr_AGEB_METROSTOTALES_20192024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGEB_METROSTOTALES_20192024_3, 
                style: style_AGEB_METROSTOTALES_20192024_3,
                popuplayertitle: 'AGEB_METROS TOTALES_2019-2024',
                interactive: true,
    title: 'AGEB_METROS TOTALES_2019-2024<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_0.png" /> 3.00<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_1.png" /> 7.21<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_2.png" /> 8.36<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_3.png" /> 16.16<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_4.png" /> 21.73<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_5.png" /> 27.09<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_6.png" /> 28.60<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_7.png" /> 30.01<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_8.png" /> 30.23<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_9.png" /> 35.00<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_10.png" /> 46.27<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_11.png" /> 48.00<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_12.png" /> 55.00<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_13.png" /> 55.25<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_14.png" /> 58.00<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_15.png" /> 59.00<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_16.png" /> 60.60<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_17.png" /> 63.12<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_18.png" /> 67.47<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_19.png" /> 71.80<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_20.png" /> 78.00<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_21.png" /> 78.79<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_22.png" /> 84.48<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_23.png" /> 84.58<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_24.png" /> 95.56<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_25.png" /> 107.50<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_26.png" /> 108.70<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_27.png" /> 111.42<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_28.png" /> 116.09<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_29.png" /> 120.10<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_30.png" /> 155.85<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_31.png" /> 161.71<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_32.png" /> 170.67<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_33.png" /> 185.30<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_34.png" /> 202.34<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_35.png" /> 212.28<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_36.png" /> 215.26<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_37.png" /> 238.80<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_38.png" /> 244.69<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_39.png" /> 249.56<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_40.png" /> 253.72<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_41.png" /> 278.00<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_42.png" /> 282.00<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_43.png" /> 286.95<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_44.png" /> 291.20<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_45.png" /> 307.97<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_46.png" /> 325.15<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_47.png" /> 342.21<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_48.png" /> 360.16<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_49.png" /> 360.44<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_50.png" /> 393.57<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_51.png" /> 438.29<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_52.png" /> 441.92<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_53.png" /> 442.02<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_54.png" /> 442.40<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_55.png" /> 445.59<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_56.png" /> 456.53<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_57.png" /> 477.75<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_58.png" /> 493.06<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_59.png" /> 504.11<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_60.png" /> 527.07<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_61.png" /> 593.85<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_62.png" /> 596.98<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_63.png" /> 642.02<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_64.png" /> 654.17<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_65.png" /> 662.42<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_66.png" /> 667.59<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_67.png" /> 672.27<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_68.png" /> 690.50<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_69.png" /> 799.05<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_70.png" /> 830.07<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_71.png" /> 778.07<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_72.png" /> 968.36<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_73.png" /> 983.72<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_74.png" /> 1127.53<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_75.png" /> 1135.32<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_76.png" /> 1158.53<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_77.png" /> 1170.63<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_78.png" /> 1170.85<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_79.png" /> 1219.41<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_80.png" /> 1223.50<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_81.png" /> 13012.10<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_82.png" /> 1303.39<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_83.png" /> 1322.02<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_84.png" /> 1369.60<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_85.png" /> 1374.18<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_86.png" /> 1394.40<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_87.png" /> 1478.91<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_88.png" /> 1533.91<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_89.png" /> 1645.92<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_90.png" /> 1756.97<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_91.png" /> 2006.49<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_92.png" /> 2060.44<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_93.png" /> 2087.64<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_94.png" /> 2314.97<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_95.png" /> 2369.73<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_96.png" /> 2378.67<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_97.png" /> 2386.66<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_98.png" /> 2612.72<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_99.png" /> 2671.56<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_100.png" /> 3086.00<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_101.png" /> 3272.25<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_102.png" /> 2772.70<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_103.png" /> 2856.09<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_104.png" /> 2880.08<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_105.png" /> 3253.42<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_106.png" /> 3834.74<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_107.png" /> 3848.77<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_108.png" /> 4101.81<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_109.png" /> 4862.79<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_110.png" /> 4297.05<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_111.png" /> 4649.24<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_112.png" /> 4687.27<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_113.png" /> 4869.92<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_114.png" /> 6495.60<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_115.png" /> 7531.10<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_116.png" /> 7090.09<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_117.png" /> 7135.05<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_118.png" /> 8225.89<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_119.png" /> 8797.35<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_120.png" /> 9327.35<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_121.png" /> 9360.22<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_122.png" /> 9973.68<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_123.png" /> 12202.20<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_124.png" /> 12265.93<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_125.png" /> 15085.60<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_126.png" /> 15690.67<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_127.png" /> 19161.53<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_128.png" /> 25912.97<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_129.png" /> 27316.13<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_130.png" /> 28921.15<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_131.png" /> 31410.12<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_132.png" /> 35109.34<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_133.png" /> 46978.17<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_134.png" /> 78628.29<br />\
    <img src="styles/legend/AGEB_METROSTOTALES_20192024_3_135.png" /> 86095.99<br />' });
var format_LOCALIDADES_METROSTOTALES_20192024_4 = new ol.format.GeoJSON();
var features_LOCALIDADES_METROSTOTALES_20192024_4 = format_LOCALIDADES_METROSTOTALES_20192024_4.readFeatures(json_LOCALIDADES_METROSTOTALES_20192024_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOCALIDADES_METROSTOTALES_20192024_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOCALIDADES_METROSTOTALES_20192024_4.addFeatures(features_LOCALIDADES_METROSTOTALES_20192024_4);
var lyr_LOCALIDADES_METROSTOTALES_20192024_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOCALIDADES_METROSTOTALES_20192024_4, 
                style: style_LOCALIDADES_METROSTOTALES_20192024_4,
                popuplayertitle: 'LOCALIDADES_METROS TOTALES_2019-2024',
                interactive: true,
    title: 'LOCALIDADES_METROS TOTALES_2019-2024<br />\
    <img src="styles/legend/LOCALIDADES_METROSTOTALES_20192024_4_0.png" /> 58.00<br />\
    <img src="styles/legend/LOCALIDADES_METROSTOTALES_20192024_4_1.png" /> 7814.13<br />\
    <img src="styles/legend/LOCALIDADES_METROSTOTALES_20192024_4_2.png" /> 2087.64<br />\
    <img src="styles/legend/LOCALIDADES_METROSTOTALES_20192024_4_3.png" /> 2485.12<br />\
    <img src="styles/legend/LOCALIDADES_METROSTOTALES_20192024_4_4.png" /> 2792.52<br />\
    <img src="styles/legend/LOCALIDADES_METROSTOTALES_20192024_4_5.png" /> 11589.74<br />\
    <img src="styles/legend/LOCALIDADES_METROSTOTALES_20192024_4_6.png" /> 15144.61<br />\
    <img src="styles/legend/LOCALIDADES_METROSTOTALES_20192024_4_7.png" /> 24674.04<br />\
    <img src="styles/legend/LOCALIDADES_METROSTOTALES_20192024_4_8.png" /> 26876.04<br />\
    <img src="styles/legend/LOCALIDADES_METROSTOTALES_20192024_4_9.png" /> 40004.60<br />\
    <img src="styles/legend/LOCALIDADES_METROSTOTALES_20192024_4_10.png" /> 40195.25<br />\
    <img src="styles/legend/LOCALIDADES_METROSTOTALES_20192024_4_11.png" /> 511139.42<br />' });
var format_COLONIAS_METROSTOTALES_20192024_5 = new ol.format.GeoJSON();
var features_COLONIAS_METROSTOTALES_20192024_5 = format_COLONIAS_METROSTOTALES_20192024_5.readFeatures(json_COLONIAS_METROSTOTALES_20192024_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COLONIAS_METROSTOTALES_20192024_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COLONIAS_METROSTOTALES_20192024_5.addFeatures(features_COLONIAS_METROSTOTALES_20192024_5);
var lyr_COLONIAS_METROSTOTALES_20192024_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COLONIAS_METROSTOTALES_20192024_5, 
                style: style_COLONIAS_METROSTOTALES_20192024_5,
                popuplayertitle: 'COLONIAS_METROS TOTALES_2019-2024',
                interactive: true,
    title: 'COLONIAS_METROS TOTALES_2019-2024<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_0.png" /> 3.00<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_1.png" /> 7.21<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_2.png" /> 16.16<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_3.png" /> 20.00<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_4.png" /> 21.73<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_5.png" /> 27.09<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_6.png" /> 30.01<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_7.png" /> 30.23<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_8.png" /> 31.35<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_9.png" /> 32.00<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_10.png" /> 33.80<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_11.png" /> 35.00<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_12.png" /> 41.00<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_13.png" /> 43.84<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_14.png" /> 45.00<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_15.png" /> 46.27<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_16.png" /> 48.00<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_17.png" /> 49.00<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_18.png" /> 50.46<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_19.png" /> 52.74<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_20.png" /> 52.95<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_21.png" /> 66.82<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_22.png" /> 67.47<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_23.png" /> 69.20<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_24.png" /> 71.80<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_25.png" /> 77.70<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_26.png" /> 78.00<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_27.png" /> 78.67<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_28.png" /> 78.79<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_29.png" /> 80.39<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_30.png" /> 84.58<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_31.png" /> 85.00<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_32.png" /> 89.15<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_33.png" /> 92.36<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_34.png" /> 94.61<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_35.png" /> 95.56<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_36.png" /> 55.00<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_37.png" /> 55.25<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_38.png" /> 55.31<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_39.png" /> 55.60<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_40.png" /> 59.00<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_41.png" /> 63.12<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_42.png" /> 60.60<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_43.png" /> 107.50<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_44.png" /> 108.19<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_45.png" /> 108.70<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_46.png" /> 111.42<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_47.png" /> 113.09<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_48.png" /> 130.42<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_49.png" /> 136.50<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_50.png" /> 143.44<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_51.png" /> 148.57<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_52.png" /> 152.00<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_53.png" /> 155.85<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_54.png" /> 159.85<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_55.png" /> 161.71<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_56.png" /> 165.30<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_57.png" /> 170.67<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_58.png" /> 171.37<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_59.png" /> 177.40<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_60.png" /> 185.30<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_61.png" /> 195.29<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_62.png" /> 196.00<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_63.png" /> 197.92<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_64.png" /> 202.34<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_65.png" /> 203.73<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_66.png" /> 2006.49<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_67.png" /> 209.70<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_68.png" /> 209.93<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_69.png" /> 212.28<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_70.png" /> 214.00<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_71.png" /> 215.26<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_72.png" /> 215.89<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_73.png" /> 220.01<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_74.png" /> 227.60<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_75.png" /> 228.14<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_76.png" /> 244.00<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_77.png" /> 245.00<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_78.png" /> 249.56<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_79.png" /> 253.72<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_80.png" /> 257.21<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_81.png" /> 260.53<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_82.png" /> 264.34<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_83.png" /> 267.80<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_84.png" /> 272.02<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_85.png" /> 275.47<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_86.png" /> 286.95<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_87.png" /> 290.37<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_88.png" /> 291.20<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_89.png" /> 297.03<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_90.png" /> 360.44<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_91.png" /> 362.76<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_92.png" /> 393.57<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_93.png" /> 409.17<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_94.png" /> 4101.81<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_95.png" /> 413.00<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_96.png" /> 433.17<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_97.png" /> 438.29<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_98.png" /> 442.02<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_99.png" /> 442.40<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_100.png" /> 527.07<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_101.png" /> 547.06<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_102.png" /> 453.65<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_103.png" /> 485.75<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_104.png" /> 595.40<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_105.png" /> 468.91<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_106.png" /> 493.06<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_107.png" /> 612.28<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_108.png" /> 642.02<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_109.png" /> 668.63<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_110.png" /> 672.27<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_111.png" /> 715.10<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_112.png" /> 830.07<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_113.png" /> 872.45<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_114.png" /> 938.69<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_115.png" /> 942.73<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_116.png" /> 968.36<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_117.png" /> 995.36<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_118.png" /> 1034.62<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_119.png" /> 1135.32<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_120.png" /> 1158.53<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_121.png" /> 1168.30<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_122.png" /> 1127.53<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_123.png" /> 1322.02<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_124.png" /> 1369.60<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_125.png" /> 1394.40<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_126.png" /> 1219.41<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_127.png" /> 1223.00<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_128.png" /> 1533.91<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_129.png" /> 15982.11<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_130.png" /> 1730.40<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_131.png" /> 1756.97<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_132.png" /> 2023.90<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_133.png" /> 2110.09<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_134.png" /> 2369.73<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_135.png" /> 2378.67<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_136.png" /> 2523.32<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_137.png" /> 2580.72<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_138.png" /> 2592.89<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_139.png" /> 2772.70<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_140.png" /> 2856.09<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_141.png" /> 2908.68<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_142.png" /> 3280.61<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_143.png" /> 3445.48<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_144.png" /> 4649.24<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_145.png" /> 4553.73<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_146.png" /> 4687.27<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_147.png" /> 4862.79<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_148.png" /> 5180.56<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_149.png" /> 7090.09<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_150.png" /> 7135.05<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_151.png" /> 7678.75<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_152.png" /> 8126.70<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_153.png" /> 8225.89<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_154.png" /> 8797.35<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_155.png" /> 9178.78<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_156.png" /> 12265.93<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_157.png" /> 13917.30<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_158.png" /> 15690.67<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_159.png" /> 17821.61<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_160.png" /> 19637.38<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_161.png" /> 20794.45<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_162.png" /> 31410.12<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_163.png" /> 3660.54<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_164.png" /> 3739.99<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_165.png" /> 3848.77<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_166.png" /> 46978.17<br />\
    <img src="styles/legend/COLONIAS_METROSTOTALES_20192024_5_167.png" /> 73269.56<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_AGEB_RURAL_Municipio_1.setVisible(true);lyr_limite_mun_2.setVisible(true);lyr_AGEB_METROSTOTALES_20192024_3.setVisible(true);lyr_LOCALIDADES_METROSTOTALES_20192024_4.setVisible(true);lyr_COLONIAS_METROSTOTALES_20192024_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_AGEB_RURAL_Municipio_1,lyr_limite_mun_2,lyr_AGEB_METROSTOTALES_20192024_3,lyr_LOCALIDADES_METROSTOTALES_20192024_4,lyr_COLONIAS_METROSTOTALES_20192024_5];
lyr_AGEB_RURAL_Municipio_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'CVE_AGEB': 'AGEB', });
lyr_limite_mun_2.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_AGEB_METROSTOTALES_20192024_3.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'CVE_LOC': 'CVE_LOC', 'CVE_AGEB': 'AGEB', 'm² 2019': 'm² autorizados 2019', 'm² 2020': 'm² autorizados 2020', 'm² 2021': 'm² autorizados 2021', 'm² 2022': '2022', 'm² 2023': '2023', 'm² 2024': '2024', 'm² totale': 'm² autorizados 2019-2024', });
lyr_LOCALIDADES_METROSTOTALES_20192024_4.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'CVE_LOC': 'CVE_LOC', 'NOMGEO': 'NOMGEO', 'AMBITO': 'AMBITO', 'm² 2019': 'm² autorizados 2019', 'm² 2020': 'm² autorizados 2020', 'm² 2021': 'm² autorizados 2021', 'm² 2022': 'm² autorizados 2022', 'm² 2023': 'm² autorizados 2023', 'm² 2024': 'm² autorizados 2024', 'm² totale': 'm² autorizados 2019-2024', });
lyr_COLONIAS_METROSTOTALES_20192024_5.set('fieldAliases', {'gid_2': 'gid_2', 'nombre': 'nombre', 'colonia': 'colonia', 'AGEB': 'AGEB', 'localidad': 'localidad', 'm² 2019': 'm² autorizados 2019', 'm² 2020': 'm² autorizados 2020', 'm² 2021': 'm² autorizados 2021', 'm² 2022': 'm² autorizados 2022', 'm² 2023': 'm² autorizados 2023', 'm² 2024': 'm² autorizados 2024', 'm² total': 'm² autorizados 2019-2024', });
lyr_AGEB_RURAL_Municipio_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'CVE_AGEB': 'TextEdit', });
lyr_limite_mun_2.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_AGEB_METROSTOTALES_20192024_3.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'CVE_LOC': 'TextEdit', 'CVE_AGEB': 'TextEdit', 'm² 2019': 'TextEdit', 'm² 2020': 'TextEdit', 'm² 2021': 'TextEdit', 'm² 2022': 'TextEdit', 'm² 2023': 'TextEdit', 'm² 2024': 'TextEdit', 'm² totale': 'TextEdit', });
lyr_LOCALIDADES_METROSTOTALES_20192024_4.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'CVE_LOC': 'TextEdit', 'NOMGEO': 'TextEdit', 'AMBITO': 'TextEdit', 'm² 2019': 'TextEdit', 'm² 2020': 'TextEdit', 'm² 2021': 'TextEdit', 'm² 2022': 'TextEdit', 'm² 2023': 'TextEdit', 'm² 2024': 'TextEdit', 'm² totale': 'TextEdit', });
lyr_COLONIAS_METROSTOTALES_20192024_5.set('fieldImages', {'gid_2': 'TextEdit', 'nombre': 'TextEdit', 'colonia': 'TextEdit', 'AGEB': 'TextEdit', 'localidad': 'TextEdit', 'm² 2019': 'TextEdit', 'm² 2020': 'TextEdit', 'm² 2021': 'TextEdit', 'm² 2022': 'TextEdit', 'm² 2023': 'TextEdit', 'm² 2024': 'TextEdit', 'm² total': 'TextEdit', });
lyr_AGEB_RURAL_Municipio_1.set('fieldLabels', {'CVEGEO': 'hidden field', 'CVE_ENT': 'hidden field', 'CVE_MUN': 'hidden field', 'CVE_AGEB': 'header label - visible with data', });
lyr_limite_mun_2.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', });
lyr_AGEB_METROSTOTALES_20192024_3.set('fieldLabels', {'CVEGEO': 'hidden field', 'CVE_ENT': 'hidden field', 'CVE_MUN': 'hidden field', 'CVE_LOC': 'hidden field', 'CVE_AGEB': 'inline label - visible with data', 'm² 2019': 'inline label - visible with data', 'm² 2020': 'inline label - visible with data', 'm² 2021': 'inline label - visible with data', 'm² 2022': 'inline label - visible with data', 'm² 2023': 'inline label - visible with data', 'm² 2024': 'inline label - visible with data', 'm² totale': 'inline label - visible with data', });
lyr_LOCALIDADES_METROSTOTALES_20192024_4.set('fieldLabels', {'CVEGEO': 'hidden field', 'CVE_ENT': 'hidden field', 'CVE_MUN': 'hidden field', 'CVE_LOC': 'hidden field', 'NOMGEO': 'header label - visible with data', 'AMBITO': 'hidden field', 'm² 2019': 'inline label - visible with data', 'm² 2020': 'inline label - visible with data', 'm² 2021': 'inline label - visible with data', 'm² 2022': 'inline label - visible with data', 'm² 2023': 'inline label - visible with data', 'm² 2024': 'inline label - visible with data', 'm² totale': 'header label - visible with data', });
lyr_COLONIAS_METROSTOTALES_20192024_5.set('fieldLabels', {'gid_2': 'hidden field', 'nombre': 'inline label - visible with data', 'colonia': 'inline label - visible with data', 'AGEB': 'inline label - visible with data', 'localidad': 'hidden field', 'm² 2019': 'header label - visible with data', 'm² 2020': 'header label - visible with data', 'm² 2021': 'header label - visible with data', 'm² 2022': 'inline label - visible with data', 'm² 2023': 'inline label - visible with data', 'm² 2024': 'header label - visible with data', 'm² total': 'header label - visible with data', });
lyr_COLONIAS_METROSTOTALES_20192024_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});