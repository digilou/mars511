// MAAS API http://marsweather.ingenology.com/

$(function() {
  var maasAPI = "http://marsweather.ingenology.com/v1/latest/?format=json";
  $.getJSON(maasAPI, function(data){
    $('#day').append(data.report.sol);
    $('#temp').append(data.report.max_temp_fahrenheit + '&deg;F');
    $('#atmo').html("<p>Current conditions: " + data.report.atmo_opacity + "</p>");
  });
  $.ajaxSetup({cache: false});
});




/**************

// pull in data as soon as document loads
$(function getMarsWeather() {
  var maasAPI = "http://marsweather.ingenology.com/v1/latest/?format=json";
  // CORS error: tried changing to jsonp, tried using .ajax in place of .getJSON, tried beforeSend to add XHR authorization....
  // maybe I should abandon jQuery for vanilla JS
  $.ajax({
    url: maasAPI,
    beforeSend: function(xhr) {
      xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
    }
  })
  .done(function(data) {
    console.log(data);
  })
  .fail(function() {
    console.log("error");
  });
  //$.getJSON(maasAPI, function(data){
  //  console.log(data);
  //  $('#day').html("<p>Today is " + data.report.sol + "</p>");
  //});
  // $.ajaxSetup({cache: false});
}); //end of entire function

**********************/
