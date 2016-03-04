$("#svg2").on("click", function(event) {
    var selector = "path#" + event.target.id;
    if (event.target.id !== null) {
      loadJSON("GetCountryData?id=" + event.target.id, dataLoaded);
    }

     // $(selector).css("fill", "red");
});

function loadJSON(url, func) {
    var xmlhttp = new XMLHttpRequest();
    var JSONObjects;

    xmlhttp.onreadystatechange = function ()
    {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200)
        {
            JSONObjects = JSON.parse(xmlhttp.responseText);
            func(JSONObjects);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function dataLoaded(json)
{
    var div = document.getElementById("dataHere");
    $("#dataHere").html("");
    $("#dataHere").append(
      '<p>Country: ' + json[0].name +  '</p>'
      + '<p>Capital: ' + json[0].capital +  '</p>'
      + '<p>Region: ' + json[0].region +  '</p>'
      + '<p>Currency: ' + json[0].currencies[0] +  '</p>'
      + '<p>Population: ' + json[0].population +  '</p>'
    );
};
