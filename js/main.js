"use strict";

const $photoDiv = $("#photos");
var APIuserID = "id=134672961@N05";
$("#dropDown").change(function () {
  var selectedItem = $("#dropDown :selected").text();

  $.getJSON({
    dataType: "jsonp",
    url: "https://api.flickr.com/services/feeds/photos_public.gne?" + APIuserID,
    data: {
      jsoncallback: "processData",
      format: "json",
      tags: selectedItem
    }
  });
});

const processData = function(data) {
  console.log(data);
  $("#photos").html("");
  for (var i = 0; i < data.items.length; i++) {
    var $img = $("<img />");
    var $anchor = data.items[i].link;
    $img.attr("src", data.items[i].media.m);
    $("#photos").append($img);
    $img.wrap('<a href="' + $anchor + '">');
  }
}