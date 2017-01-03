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
