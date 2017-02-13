console.log("header height: "+ $('header').height());
console.log("nav height: "+ $('nav').height());
$('nav').affix({
  offset: {
    top: $('header').outerHeight()
  }
});
