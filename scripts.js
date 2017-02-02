// MAAS API http://marsweather.ingenology.com/
/*
{
  "report": 
  {
    "terrestrial_date": "2017-01-25",
    "sol": 1590,
    "ls": 305.0,
    "min_temp": -76.0,
    "min_temp_fahrenheit": -104.8,
    "max_temp": -1.0,
    "max_temp_fahrenheit": 30.2,
    "pressure": 864.0,
    "pressure_string": "Higher",
    "abs_humidity": null,
    "wind_speed": null,
    "wind_direction": "--",
    "atmo_opacity": "Sunny",
    "season": "Month 11",
    "sunrise": "2017-01-25T12:37:00Z",
    "sunset": "2017-01-26T00:51:00Z"
  }
}
*/

// pull in data as soon as document loads
$(function getMarsWeather() {
  var maasAPI = "http://marsweather.ingenology.com/v1/latest/?format=jsonp";
  $.ajax({
    url: maasAPI,
    method: "GET",
    dataType: "jsonp",
    //xhr: XMLHttpRequest,
    /*xhrFields: {
      withCredentials: true
    }*/
    
  })
  .done(function(data){
    console.log(data.report);
    $('#day').html("<h2>Sol: <span>" + data.report.sol + "</span></h2><p>Earth Date: " + data.report.terrestrial_date + "</p>");
    $('#temp').html(data.report.max_temp_fahrenheit + "&deg; F");
    $('#atmo').html(data.report.atmo_opacity);
    // jQuery temp toggle
   $("#c").click(function(){
     $("#f").removeClass("ui-state-active");
     $(this).addClass("ui-state-active");
     $("#temp").html(data.report.max_temp + '&deg; C');
   });
   $("#f").click(function(){
     $("#temp").html(data.report.max_temp_fahrenheit + "&deg; F");
   });
  })
  .fail(function(){
    console.log("error");
    $('#forecast').html('<p>Data not available</p>')
  });
  $.ajaxSetup({cache: false});

}); //end of entire function

// use radio button without icons (http://jqueryui.com/checkboxradio/#no-icons) 
$(function() {
    $("input").checkboxradio({icon: false});
});
