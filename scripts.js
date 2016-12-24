// MAAS API http://marsweather.ingenology.com/

$(document).ready(function() {
  $.getJSON("http://marsweather.ingenology.com/v1/latest/", function(a) {
    $("#forecast").html("<p>The weather on Mars is currently<span id='temp'" + a[0].max_temp_fahrenheit + "</span></p><p>Today it's <span id='atmosphere'" + a[0].atmo_opacity + "</span></p>")
    });
    // $.ajaxSetup({cache: false});  
});
