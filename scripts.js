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

// weather from MAAS API
$(function getMarsWeather() {
 var maasAPI = "//marsweather.ingenology.com/v1/latest/?format=jsonp";
  $.ajax({
    url: maasAPI,
    method: "GET",
    dataType: "jsonp",
    xhr: XMLHttpRequest,
    xhrFields: {
      withCredentials: true
    }
  })
  .done(function(data){
    console.log(data.report);
    $('#day').html("<h2>Sol: <span>" + data.report.sol + "</span></h2><p>(Earth Date: " + data.report.terrestrial_date + ")</p>");
    $('#temp').html(data.report.max_temp_fahrenheit + "&deg;F");
    $('#atmo').html(data.report.atmo_opacity);
    // jQuery temp toggle
   $("#c").click(function(){
     $("#f").removeClass("ui-state-active");
     $(this).addClass("ui-state-active");
     $("#temp").html(data.report.max_temp + '&deg;C');
   });
   $("#f").click(function(){
     $("#c").removeClass("ui-state-active");
     $(this).addClass("ui-state-active");
     $("#temp").html(data.report.max_temp_fahrenheit + "&deg; F");
   });
  })
  .fail(function(){
    console.log("error");
    $('#forecast').html('<p>Data not available</p>')
  });
  $.ajaxSetup({cache: false});

});



/*
Images from NASA API
https://api.nasa.gov/api.html#MarsPhotos
*/

function getImages(){
  var nasaAPI= "//api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEYapi_key=FWkpdy6gQRDhnyHdvhBYSw33XpRUThfKbUnt99Bw";

  $.ajax({
    url: nasaAPI,
    method: "GET",
    dataType: "jsonp",
    xhr: XMLHttpRequest,
    xhrFields: {
      withCredentials: true
    }
  })
  .done(function(result){
    if("copyright" in result) {
      $("#copyright").text("Image Credits: " + result.copyright);
    }
    else {
      $("#copyright").text("Image Credits: " + "Public Domain");
    }

    if(result.media_type == "video") {
      $("#apod_img_id").css("display", "none"); 
      $("#apod_vid_id").attr("src", result.url);
    }
    else {
      $("#apod_vid_id").css("display", "none"); 
      $("#apod_img_id").attr("src", result.url);
    }
    
    $("#reqObject").text(url);
    $("#returnObject").text(JSON.stringify(result, null, 4));  
    $("#apod_explaination").text(result.explanation);
    $("#apod_title").text(result.title);
    
    $("#image").html(result);
    }
  )
  .fail(function(){
      console.log("error");
      $('#photo').html('<p>Photo not available</p>')
    });
}

$(getImages());


// https://api.jquery.com/jquery.getjson/

// Martian Chronicles: black river, discal forest, wilder town, second try, spender hill, iron town, grain villa, detroit moss town (cemetary), father peregrine, usher
// The Martian: Mark Whitney