(function($) {

    $(document).ready(function() {

      function resizeMap() {
           var mapWidth = $('.container').css('width');
           var svgWidth = $('.container').width();
           var mapHeight = svgWidth *.65;
           $('#map').css('width' , mapWidth).css('height' , mapHeight +'px');
           $('#map svg').attr('width' , svgWidth).attr('height' , mapHeight);
         };

       $('#list').hide();
       $('.map').addClass('active');
       $('#view_map').addClass('active');


          $('#view_map').click(function(){
               $('#list').hide();
               $('#map-click').show();

               $('.list').removeClass('active');
               $('.map').addClass('active');
               $('#view_list').removeClass('active');
               $('#view_map').addClass('active');

           });
           $('#view_list').click(function(){
               $('#list').show();
               $('#map-click').hide();

               $('.map').removeClass('active');
               $('.list').addClass('active');
               $('#view_map').removeClass('active');
               $('#view_list').addClass('active');
           });

    $('#map').usmap({

      'includeTerritories': [ 'PR', 'VI',  'CNMI'],
      'stateSpecificStyles': {
        'CA' : {fill: '#968C83'},
        'PR' : {fill: '#968C83'},
        'FL' : {fill: '#968C83'},
        'MA' : {fill: '#968C83'},
        'CNMI' : {fill: '#968C83'},



      },


      'stateSpecificLabelBackingStyles': {
        'PR' : {fill: '#968C83'},
        'MA' : {fill: '#968C83'},
        'CNMI' : {fill: '#968C83'},

      },
      'stateSpecificLabelTextStyles':{
        'PR' : {fill: '#333'},
        'MA' : {fill: '#333'},
        'CA' : {fill: '#333'},
        'PR' : {fill: '#333'},
        'FL' : {fill: '#333'},
        'MA' : {fill: '#333'},
        'CNMI' : {fill: '#333'},
      },




      'mouseover' : function(event, data) {
        var states_dictionary = {
          AL: "Alabama",
          AK: "Alaska",
          AZ: "Arizona",
          AR: "Arkansas",
          CA: "California",
          CO: "Colorado",
          CT: "Connecticut",
          DE: "Delaware",
          FL: "Florida",
          GA: "Georgia",
          HI: "Hawaii",
          ID: "Idaho",
          IL: "Illinois",
          IN: "Indiana",
          IA: "Iowa",
          KS: "Kansas",
          KY: "Kentucky",
          LA: "Louisiana",
          ME: "Maine",
          MD: "Maryland",
          MA: "Massachusetts",
          MI: "Michigan",
          MN: "Minnesota",
          MS: "Mississippi",
          MO: "Missouri",
          MT: "Montana",
          NE: "Nebraska",
          NV: "Nevada",
          NH: "New Hampshire",
          NJ: "New Jersey",
          NM: "New Mexico",
          NY: "New York",
          NC: "North Carolina",
          ND: "North Dakota",
          OH: "Ohio",
          OK: "Oklahoma",
          OR: "Oregon",
          PA: "Pennsylvania",
          RI: "Rhode Island",
          SC: "South Carolina",
          SD: "South Dakota",
          TN: "Tennessee",
          TX: "Texas",
          UT: "Utah",
          VT: "Vermont",
          VA: "Virginia",
          WA: "Washington",
          WV: "West Virginia",
          WI: "Wisconsin",
          WY: "Wyoming",
          VI: "Virgin Islands",
          PR: "Puerto Rico",
          CNMI: "CNMI"
      };

         $('#tooltip').text(states_dictionary[data.name]).show();

                $('#map').mousemove(function(e){
                  var x = e.pageX-$('#map').offset().left + 10;
                  var y =  e.pageY-$('#map').offset().top + 250;
                    $('#tooltip').css({
                        top: y,
                        left: x,
                        'position': 'absolute',
                        'border':'1px solid black',
                        'background': '#fff',
                        'color': '#333',
                        'font-size': '1.5 em',
                        'padding': '5px',
                        'opacity': '0.75',
                        'border-radius': '2px'

                      });
                  });
     },

         'mouseout' : function(event, data) {
            $('#tooltip').hide();
         },
         'click' : function(event, data) {
           var states_dictionary = {
             AL: "Alabama",
             AK: "Alaska",
             AZ: "Arizona",
             AR: "Arkansas",
             CA: "California",
             CO: "Colorado",
             CT: "Connecticut",
             DE: "Delaware",
             FL: "Florida",
             GA: "Georgia",
             HI: "Hawaii",
             ID: "Idaho",
             IL: "Illinois",
             IN: "Indiana",
             IA: "Iowa",
             KS: "Kansas",
             KY: "Kentucky",
             LA: "Louisiana",
             ME: "Maine",
             MD: "Maryland",
             MA: "Massachusetts",
             MI: "Michigan",
             MN: "Minnesota",
             MS: "Mississippi",
             MO: "Missouri",
             MT: "Montana",
             NE: "Nebraska",
             NV: "Nevada",
             NH: "NewHampshire",
             NJ: "NewJersey",
             NM: "NewMexico",
             NY: "NewYork",
             NC: "NorthCarolina",
             ND: "NorthDakota",
             OH: "Ohio",
             OK: "Oklahoma",
             OR: "Oregon",
             PA: "Pennsylvania",
             RI: "RhodeIsland",
             SC: "SouthCarolina",
             SD: "SouthDakota",
             TN: "Tennessee",
             TX: "Texas",
             UT: "Utah",
             VT: "Vermont",
             VA: "Virginia",
             WA: "Washington",
             WV: "WestVirginia",
             WI: "Wisconsin",
             WY: "Wyoming",
             VI: "VirginIslands",
             PR: "PuertoRico",
             CNMI: "CNMI"
         };


             window.location ="#"+ states_dictionary[data.name];


         }


      });

      resizeMap();
      $(window).resize(function() {
          resizeMap();

      });


    });

}(jQuery));
