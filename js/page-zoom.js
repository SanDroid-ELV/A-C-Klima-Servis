function zoomOut()
{
  var Page = document.getElementById('Body');
  var zoom = parseInt(Page.style.zoom) - 25 +'%'
  Page.style.zoom = zoom;
  return false;
}
