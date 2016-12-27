// MAAS API http://marsweather.ingenology.com/

// pull in data as soon as document loads
(function() {
  var maasAPI = "http://marsweather.ingenology.com/v1/latest/";
  $.getJSON(maasAPI, {format:"jsonp"});
    .done(function(data) {
      var temperature = report.max_temp_fahrenheit.val();
      var conditions = report.atmo_opacity.val();
      $.each(data.items, function(i, item){
        $("#forecast").html("<p>The weather on Mars is currently <span id='temp'" + temperature + "</span></p><p>Today it's <span id='atmosphere'" + conditions + "</span></p>")
      });
    });
    // $.ajaxSetup({cache: false});

}); //end of entire function

// http://api.jquery.com/jquery.getjson/

// Martian Chronicles: black river, discal forest, wilder town, second try, spender hill, iron town, grain villa, detroit moss town (cemetary), father peregrine, usher
// The Martian: Mark Whitney
