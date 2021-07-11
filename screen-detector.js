window.addEventListener('resize', screen_resize);
 
function screen_resize() {
  var h = parseInt(window.innerHeight);
  var w = parseInt(window.innerWidth);

  if(w <= 800) {
      window.location.replace("http://redirectedSite.com/");
  }
 }
