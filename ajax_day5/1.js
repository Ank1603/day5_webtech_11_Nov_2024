"use strict";

//DOM eventlistener
document.getElementById("btn").addEventListener("click", function () {
  //alert('button 1 clicked');

  var xmlhttp = new XMLHttpRequest();

  console.log(xmlhttp);
  console.log(XMLHttpRequest);
  //if 0- request is not initialized
  console.log(xmlhttp.status);
  xmlhttp.onreadystatechange = function () {
    console.log(xmlhttp.readyState, xmlhttp.status);

    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      console.log(xmlhttp.responseText);

      var res = JSON.parse(xmlhttp.responseText);
      console.log(res);

      res &&
        res.length > 0 &&
        res.forEach(function (v, i) {
          console.log(v, i);

          var divtag = document.createElement("div");
          var imgtag = document.createElement("img");
          var h2tag = document.createElement("h2");
          var ptag = document.createElement("p");

          imgtag.src = v.image;
          h2tag.innerHTML = v.price;
          ptag.innerHTML = v.title;
          divtag.className = "col-3 text-center";
          imgtag.className = "img-fluid";

          divtag.append(imgtag, h2tag, ptag);
          document.querySelector("#row").append(divtag);
        });
    }

    //1- works when open method is initiated
  };

  xmlhttp.open("GET", "https://fakestoreapi.com/products");
  //this method will helps to perform fetching data from the server
  xmlhttp.send();
  //after sending the request, this will be executed
  //2- works when send method is initiated
  //3- works request is in progress
  //4- request cycle completed
});
