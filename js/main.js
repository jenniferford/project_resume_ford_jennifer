$ (document) .ready (function () {




$(".accordion").accordion({
//whether the first section is expanded or not
firstChildExpand: true,
//whether expanding mulitple section is allowed or not
multiExpand: false,
//slide animation speed
slideSpeed: 500,
//drop down icon
dropDownIcon: "&#9660",
});

$.backstretch([
      "http://www.jenniferlinford.com/images/wood.jpg"
    , "http://www.jenniferlinford.com/images/trees.jpeg"
    , "http://www.jenniferlinford.com/images/plants.jpeg"
  ], {duration: 3000, fade: 750});
});
