window.addEventListener('resize', screen_resize);
 
function screen_resize() {
  var h = parseInt(window.innerHeight);
  var w = parseInt(window.innerWidth);

  if(w >= 1080) {
      window.location.replace("https://ac-klima-servis.xyz/desktop");
  }
 }
