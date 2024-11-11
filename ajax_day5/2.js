"use strict";

$(document).ready(function () {
  //ready image will not check image and iframes before they are fully loaded

  $("button").click(function () {
    //alert("Button clicked");
    $.ajax({
      type: "GET",
      url: "https://restcountries.com/v3.1/all",

      success: function (data) {
        // console.log(data);
        // console.log(data.flags.png, data.name.common);
        $.each(data, function (i, v) {
          console.log(i, v);
          console.log(v.flags.png, v.name.common);
          $("#row").append(`
                  <div class="col-md-3 text-center" >
              <img src="${v.flags.png}" class="img-fluid">
              <h4>${v.name.common}</h4>
              </div>`);
        });
      },
      error: function () {
        console.log("Api request failed");
      },
    });
  });
});
