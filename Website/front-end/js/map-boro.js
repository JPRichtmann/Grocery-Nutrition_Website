
mapboxgl.accessToken = 'pk.eyJ1IjoieWlob3U5OCIsImEiOiJja29kOWx2ZzEwMDhuMnV0cmY3eGJmdTdrIn0.P896bZB3ddlNqt5ANjYU6A';

var map = new mapboxgl.Map({
    container: 'map_container',
    style: 'mapbox://styles/yihou98/ckofvsx2q1ohn18murzz9vdar',
    center: [-0.118, 51.509] ,
    zoom: 9
});


// Disable zoom on double click
map.doubleClickZoom.disable();

// When map loads...
let c = new MapboxChoropleth({
  tableUrl: 'https://raw.githubusercontent.com/JPRichtmann/Grocery-Nutrition_Website/main/data/borough_values.csv',
  tableNumericField: 'percentage_of_children_with_overweight',
  tableIdField: 'area_id',
  geometryUrl: 'https://raw.githubusercontent.com/JPRichtmann/Grocery-Nutrition_Website/main/data/borough.geojson',
  geometryIdField: 'London_Borough_Excluding_MHW1.GSS_CODE',
  layerId: 'choro-overweight',
  binCount: 6,
  sourceId: 'boro-overweight',
  colorScheme: ['white', 'blue'],
  immediate: true,
  layout: {
      'visibility': 'none'},
  paint: { 'fill-opacity':[
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          3,
          0.5
          ]
          },
  legendElement: '#legend_1'
  }).addTo(map);


let d = new MapboxChoropleth({
  tableUrl: 'https://raw.githubusercontent.com/JPRichtmann/Grocery-Nutrition_Website/main/data/borough_values.csv',
  tableNumericField: 'f_water',
  tableIdField: 'area_id',
  geometryUrl: 'https://raw.githubusercontent.com/JPRichtmann/Grocery-Nutrition_Website/main/data/borough.geojson',
  geometryIdField: 'London_Borough_Excluding_MHW1.GSS_CODE',
  layerId: 'choro-f_water',
  binCount: 6,
  sourceId: 'boro-f_water',
  colorScheme: ['white', 'red'],
  immediate: true,
  layout: {
      'visibility': 'none'},
  paint: { 'fill-opacity':[
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          3,
          0.5
          ]
          },
  legendElement: '#legend_2'
  }).addTo(map);


let e = new MapboxChoropleth({
  tableUrl: 'https://raw.githubusercontent.com/JPRichtmann/Grocery-Nutrition_Website/main/data/borough_values.csv',
  tableNumericField: 'weight',
  tableIdField: 'area_id',
  geometryUrl: 'https://raw.githubusercontent.com/JPRichtmann/Grocery-Nutrition_Website/main/data/borough.geojson',
  geometryIdField: 'London_Borough_Excluding_MHW1.GSS_CODE',
  layerId: 'choro-weight',
  binCount: 6,
  sourceId: 'boro-weight',
  colorScheme: ['white', 'red'],
  immediate: true,
  layout: {
      'visibility': 'none'},
  paint: { 'fill-opacity':[
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          3,
          0.5
          ]
          },
  legendElement: '#legend_3'
  }).addTo(map);  
    
	
 let f = new MapboxChoropleth({
        tableUrl: 'https://raw.githubusercontent.com/JPRichtmann/Grocery-Nutrition_Website/main/data/borough_values.csv',
        tableNumericField: 'f_poultry',
        tableIdField: 'area_id',
        geometryUrl: 'https://raw.githubusercontent.com/JPRichtmann/Grocery-Nutrition_Website/main/data/borough.geojson',
        geometryIdField: 'London_Borough_Excluding_MHW1.GSS_CODE',
        layerId: 'choro-f_poultry',
        sourceId: 'boro-f_poultry',
        colorScheme: [ 'white','red'],
        binCount: 6,
        immediate: true,
        layout: {
            'visibility': 'none'},
        paint: { 'fill-opacity':[
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                3,
                0.5
                ]
                },
        legendElement: '#legend_4'
        }).addTo(map);	
	
 let g = new MapboxChoropleth({
        tableUrl: 'https://raw.githubusercontent.com/JPRichtmann/Grocery-Nutrition_Website/main/data/borough_values.csv',
        tableNumericField: 'f_soft_drinks',
        tableIdField: 'area_id',
        geometryUrl: 'https://raw.githubusercontent.com/JPRichtmann/Grocery-Nutrition_Website/main/data/borough.geojson',
        geometryIdField: 'London_Borough_Excluding_MHW1.GSS_CODE',
        layerId: 'choro-f_soft_drinks',
        sourceId: 'boro-f_soft_drinks',
        colorScheme: [ 'white','red'],
        binCount: 6,
        immediate: true,
        layout: {
            'visibility': 'none'},
        paint: { 'fill-opacity':[
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                3,
                0.5
                ]
                },
        legendElement: '#legend_5'
        }).addTo(map);		
	
let h = new MapboxChoropleth({
        tableUrl: 'https://raw.githubusercontent.com/JPRichtmann/Grocery-Nutrition_Website/main/data/borough_values.csv',
        tableNumericField: 'f_fats_oils',
        tableIdField: 'area_id',
        geometryUrl: 'https://raw.githubusercontent.com/JPRichtmann/Grocery-Nutrition_Website/main/data/borough.geojson',
        geometryIdField: 'London_Borough_Excluding_MHW1.GSS_CODE',
        layerId: 'choro-f_fats_oils',
        sourceId: 'boro-f_fats_oils',
        colorScheme: [ 'white','red'],
        binCount: 6,
        immediate: true,
        layout: {
            'visibility': 'none'},
        paint: { 'fill-opacity':[
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                3,
                0.5
                ]
                },
        legendElement: '#legend_6'
        }).addTo(map);		
		
let l = new MapboxChoropleth({
        tableUrl: 'https://raw.githubusercontent.com/JPRichtmann/Grocery-Nutrition_Website/main/data/borough_values.csv',
        tableNumericField: 'fibre',
        tableIdField: 'area_id',
        geometryUrl: 'https://raw.githubusercontent.com/JPRichtmann/Grocery-Nutrition_Website/main/data/borough.geojson',
        geometryIdField: 'London_Borough_Excluding_MHW1.GSS_CODE',
        layerId: 'choro-fibre',
        sourceId: 'boro-fibre',
        colorScheme: [ 'white','green'],
        binCount: 6,
        immediate: true,
        layout: {
            'visibility': 'none'},
        paint: { 'fill-opacity':[
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                3,
                0.5
                ]
                },
        legendElement: '#legend_7'
        }).addTo(map);		

let m = new MapboxChoropleth({
        tableUrl: 'https://raw.githubusercontent.com/JPRichtmann/Grocery-Nutrition_Website/main/data/borough_values.csv',
        tableNumericField: 'f_wine',
        tableIdField: 'area_id',
        geometryUrl: 'https://raw.githubusercontent.com/JPRichtmann/Grocery-Nutrition_Website/main/data/borough.geojson',
        geometryIdField: 'London_Borough_Excluding_MHW1.GSS_CODE',
        layerId: 'choro-f_wine',
        sourceId: 'boro-f_wine',
        colorScheme: [ 'white','green'],
        binCount: 6,
        immediate: true,
        layout: {
            'visibility': 'none'},
        paint: { 'fill-opacity':[
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                3,
                0.5
                ]
                },
        legendElement: '#legend_8'
        }).addTo(map);	

let n = new MapboxChoropleth({
        tableUrl: 'https://raw.githubusercontent.com/JPRichtmann/Grocery-Nutrition_Website/main/data/borough_values.csv',
        tableNumericField: 'f_fruit_veg',
        tableIdField: 'area_id',
        geometryUrl: 'https://raw.githubusercontent.com/JPRichtmann/Grocery-Nutrition_Website/main/data/borough.geojson',
        geometryIdField: 'London_Borough_Excluding_MHW1.GSS_CODE',
        layerId: 'choro-f_fruit_veg',
        sourceId: 'boro-f_fruit_veg',
        colorScheme: [ 'white','green'],
        binCount: 6,
        immediate: true,
        layout: {
            'visibility': 'none'},
        paint: { 'fill-opacity':[
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                3,
                0.5
                ]
                },
        legendElement: '#legend_9'
        }).addTo(map);	

let o = new MapboxChoropleth({
        tableUrl: 'https://raw.githubusercontent.com/JPRichtmann/Grocery-Nutrition_Website/main/data/borough_values.csv',
        tableNumericField: 'f_dairy_weight',
        tableIdField: 'area_id',
        geometryUrl: 'https://raw.githubusercontent.com/JPRichtmann/Grocery-Nutrition_Website/main/data/borough.geojson',
        geometryIdField: 'London_Borough_Excluding_MHW1.GSS_CODE',
        layerId: 'choro-f_dairy_weight',
        sourceId: 'boro-f_dairy_weight',
        colorScheme: [ 'white','green'],
        binCount: 6,
        immediate: true,
        layout: {
            'visibility': 'none'},
        paint: { 'fill-opacity':[
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                3,
                0.5
                ]
                },
        legendElement: '#legend_10'
        }).addTo(map);			
	///////////////////////////////////////////////////////////////////////////

   // Store which brough is being hovered over or clicked on
  var boroID = null;
  var boroIDClick = null; 
 
map.on('idle', function () {

              //calling top_10_list function
              

              // If these two layers have been added to the style,

              // add the toggle buttons.
              if (map.getLayer('choro-overweight') && map.getLayer('choro-f_water')&&map.getLayer('choro-weight')&&map.getLayer('choro-f_poultry')&&map.getLayer('choro-f_soft_drinks')&&map.getLayer('choro-f_fats_oils')&&map.getLayer('choro-fibre')&&map.getLayer('choro-f_wine')&&map.getLayer('choro-f_fruit_veg')&&map.getLayer('choro-f_dairy_weight')) {
              // Enumerate ids of the layers.
                var toggleableLayerIds = ['choro-overweight', 'choro-f_water','choro-weight','choro-f_poultry','choro-f_soft_drinks','choro-f_fats_oils','choro-fibre','choro-f_wine','choro-f_fruit_veg','choro-f_dairy_weight'];
                var toggleableLayerNames = ['Overweight (%)', 'Water (%)','avg. Weight','Poultry (%)','Soft drinks (%)','Fat&Oil (%)','avg. Fibre','Wine (%)','Fruit&Veg (%)','Dairy (%)'];
                // Set up the corresponding toggle button for each layer.
                for (var i = 0; i < toggleableLayerIds.length; i++) {
                  var id = toggleableLayerIds[i];
                  var names=toggleableLayerNames[i];
                  if (!document.getElementById(id)) {
                    // Create a link.
                    var link = document.createElement('a');
                    link.id = id;
                    link.href = '#';
                    link.textContent = names;
                    link.className = 'deactivated';
                    // Show or hide layer when the toggle is clicked.
                    link.onclick = function (e) {
                      var clickedLayer = this.id;
                      e.preventDefault();
                      e.stopPropagation();


                       for (var j = 0; j < toggleableLayerIds.length; j++) {
                         var visibility = map.getLayoutProperty(
                            clickedLayer,
                            'visibility'
                          );
                         if (clickedLayer === toggleableLayerIds[j]& visibility === 'none') {
                           layers.children[j].className = 'active';
                           map.setLayoutProperty(toggleableLayerIds[j], 'visibility', 'visible');


                         }
                         else {
                           layers.children[j].className = 'deactivated';
                           map.setLayoutProperty(toggleableLayerIds[j], 'visibility', 'none');
                         }
                       }


                          var SourceIds=['boro-overweight','boro-f_water','boro-weight','boro-f_poultry','boro-f_soft_drinks','boro-f_fats_oils','boro-fibre','boro-f_wine','boro-f_fruit_veg','boro-f_dairy_weight'];
                          var Variable=['percentage_of_children_with_overweight','f_water','weight','f_poultry','f_soft_drinks','f_fats_oils','fibre','f_wine','f_fruit_veg','f_dairy_weight'];
                          for (var k = 0; k < toggleableLayerIds.length; k++) {
                           var active= map.getLayoutProperty(toggleableLayerIds[k],'visibility');
                             if (active ==='visible') {
                             var activeLayer=toggleableLayerIds[k];
                             var activeSource=SourceIds[k];
                             var v=Variable[k];

                         }

                       }

                       var x = document.getElementById("legend_1");
                       var y = document.getElementById("legend_2");
                       var z = document.getElementById("legend_3");
					   var t = document.getElementById("legend_4");
                       var p = document.getElementById("legend_5");
                       var r = document.getElementById("legend_6");
					   var q = document.getElementById("legend_7");
					   var s = document.getElementById("legend_8");
                       var u = document.getElementById("legend_9");
                       var w = document.getElementById("legend_10");
                      
                       if (activeLayer==='choro-overweight'){

                        x.style.display = "block";
                        y.style.display = "none";
                        z.style.display = "none";
                        t.style.display = "none";
                        p.style.display = "none";
						r.style.display = "none";
                        q.style.display = "none";
                        s.style.display = "none";
                        u.style.display = "none";
						w.style.display = "none"; 
                        


                       }
                      else if (activeLayer==='choro-f_water') {
                        x.style.display = "none";
                        y.style.display = "block";
                        z.style.display = "none";
                        t.style.display = "none";
                        p.style.display = "none";
						r.style.display = "none";
						q.style.display = "none";
                        s.style.display = "none";
                        u.style.display = "none";
						w.style.display = "none"; 
                      
                      }
                     
					 else if (activeLayer==='choro-weight') {
                        x.style.display = "none";
                        y.style.display = "none";
                        z.style.display = "block";
                        t.style.display = "none";
                        p.style.display = "none";
						r.style.display = "none";
						q.style.display = "none";
                        s.style.display = "none";
                        u.style.display = "none";
						w.style.display = "none"; 
                      
                      }
					 
					 else if (activeLayer==='choro-f_poultry') {
                        x.style.display = "none";
                        y.style.display = "none";
                        z.style.display = "none";
                        t.style.display = "block";
                        p.style.display = "none";
						r.style.display = "none";
						q.style.display = "none";
                        s.style.display = "none";
                        u.style.display = "none";
						w.style.display = "none"; 
                      
                      }
					 
					else if (activeLayer==='choro-f_soft_drinks') {
                        x.style.display = "none";
                        y.style.display = "none";
                        z.style.display = "none";
                        t.style.display = "none";
                        p.style.display = "block";
						r.style.display = "none";
						q.style.display = "none";
                        s.style.display = "none";
                        u.style.display = "none";
						w.style.display = "none"; 
                      
                      }
					 
					 else if (activeLayer==='choro-f_fats_oils') {
                        x.style.display = "none";
                        y.style.display = "none";
                        z.style.display = "none";
                        t.style.display = "none";
                        p.style.display = "none";
						r.style.display = "block";
						q.style.display = "none";
                        s.style.display = "none";
                        u.style.display = "none";
						w.style.display = "none"; 
                      
                      }
					 else if (activeLayer==='choro-fibre') {
                        x.style.display = "none";
                        y.style.display = "none";
                        z.style.display = "none";
                        t.style.display = "none";
                        p.style.display = "none";
						r.style.display = "none";
						q.style.display = "block";
                        s.style.display = "none";
                        u.style.display = "none";
						w.style.display = "none"; 
                      
                      }
					  else if (activeLayer==='choro-f_wine') {
                        x.style.display = "none";
                        y.style.display = "none";
                        z.style.display = "none";
                        t.style.display = "none";
                        p.style.display = "none";
						r.style.display = "none";
						q.style.display = "none";
                        s.style.display = "block";
                        u.style.display = "none";
						w.style.display = "none"; 
                      
                      }
					  else if (activeLayer==='choro-f_fruit_veg') {
                        x.style.display = "none";
                        y.style.display = "none";
                        z.style.display = "none";
                        t.style.display = "none";
                        p.style.display = "none";
						r.style.display = "none";
						q.style.display = "none";
                        s.style.display = "none";
                        u.style.display = "block";
						w.style.display = "none"; 
                      
                      }
                      else {
                        x.style.display = "none";
                        y.style.display = "none";
                        z.style.display = "none";
                        t.style.display = "none";
                        p.style.display = "none";
						r.style.display = "none";
						q.style.display = "none";
                        s.style.display = "none";
                        u.style.display = "none";
						w.style.display = "block"; 
                      }



                       console.log(activeLayer);
                       console.log(activeSource);
                       // Store which borough is being hovered over or clicked on
                       var boroID = null;
                       var boroIDClick = null;
                       // When the mouse hovers over the borough, change the opacity
                           map.on('mousemove', activeLayer, function(e) {

                             map.getCanvas().style.cursor = 'pointer';

                             // Check that the feature exits
                             if (e.features.length > 0) {
                               if (boroID) {
                                   map.setFeatureState(
                                   { source: activeSource, id: boroID },
                                   { hover: false }
                                 );
                               }

                               boroID = e.features[0].id;
                               console.log(boroID);
                               map.setFeatureState(
                                 { source: activeSource, id: boroID },
                                 { hover: true }
                               );

                               /// click popup
                               map.on('click', activeLayer, function (e1) {

                                 // Check that the feature exits
                                 if (e1.features.length > 0) {
                                  if (boroIDClick) {
                                    console.log('Storing selected borough ID...');
                                 }

                                 // Store borough name of currently selected borough
                                boroIDClick = e1.features[0].properties["London_Borough_Excluding_MHW1.NAME"];
                                 console.log(boroIDClick);

                                 if (activeLayer==='choro-overweight'){
                                 var coordinates = e1.features[0].geometry.coordinates.slice();
                                 var description = e1.features[0].properties['bor.csv.percentage_of_children_with_overweight'];
                               }
							   else if (activeLayer==='choro-f_water') {
                                 var coordinates = e1.features[0].geometry.coordinates.slice();
                                 var description = e1.features[0].properties['bor.csv.f_water'];
                               }
                               else if (activeLayer==='choro-weight') {
                                 var coordinates = e1.features[0].geometry.coordinates.slice();
                                 var description = e1.features[0].properties['bor.csv.weight'];
                               }
                               else if (activeLayer==='choro-f_poultry') {
                                 var coordinates = e1.features[0].geometry.coordinates.slice();
                                 var description = e1.features[0].properties['bor.csv.f_poultry'];
                               }
                               else if (activeLayer==='choro-f_soft_drinks') {
                                 var coordinates = e1.features[0].geometry.coordinates.slice();
                                 var description = e1.features[0].properties['bor.csv.f_soft_drinks'];
                               }
                               else if (activeLayer==='choro-f_fats_oils') {
                                 var coordinates = e1.features[0].geometry.coordinates.slice();
                                 var description = e1.features[0].properties['bor.csv.f_fats_oils'];
                               }
							   else if (activeLayer==='choro-fibre') {
                                 var coordinates = e1.features[0].geometry.coordinates.slice();
                                 var description = e1.features[0].properties['bor.csv.fibre'];
                               }
							   else if (activeLayer==='choro-f_wine') {
                                 var coordinates = e1.features[0].geometry.coordinates.slice();
                                 var description = e1.features[0].properties['bor.csv.f_wine'];
                               }
							   else if (activeLayer==='choro-f_fruit_veg') {
                                 var coordinates = e1.features[0].geometry.coordinates.slice();
                                 var description = e1.features[0].properties['bor.csv.f_fruit_veg'];
                               }
							   else if (activeLayer==='choro-f_dairy_weight') {
                                 var coordinates = e1.features[0].geometry.coordinates.slice();
                                 var description = e1.features[0].properties['bor.csv.f_dairy_weight'];
                               }
                            //console.log(description);
                              //	 console.log(coordinates);
                              //	 console.log(e1.lngLat.lng);
                                 // Ensure that if the map is zoomed out such that multiple
                                 // copies of the feature are visible, the popup appears
                                 // over the copy being pointed to.
                                 //while (Math.abs(e1.lngLat.lng - coordinates[0]) > 180) {
                               //		coordinates[0] += e1.lngLat.lng > coordinates[0] ? 360 : -360;
                             //		}

                                 new mapboxgl.Popup()
                                  .setLngLat(e1.lngLat)
                                  .setHTML("<b>Borough name:</b> "+boroIDClick+"<br/><b>Value:</b> "+ description)
                                  .addTo(map);
                                 }
                               });

                             } // end of feature length - hover
                           }); // end of on hover

                           // When the mouse leaves the borough, return opacity to normal
                             map.on('mouseleave', activeLayer, function() {
                               if (boroID) {
                                 map.setFeatureState(
                                   { source: activeSource, id: boroID},
                                   { hover: false }
                                 );
                               }
                               boroID = null;
                             });

          };

         var layers = document.getElementById('menu');
			layers.appendChild(link);


         //legend.getHTML('choro')
         //console.log(map.getHTML());
            }
            }
          }
         });
			

 // end of on load
