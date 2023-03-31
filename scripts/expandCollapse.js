
imgexp = new Image(10,10);
imgcol = new Image(10,10);
imgexp.src="img/ec01.GIF";
imgcol.src="img/ec02.GIF";


function toggle(imgnm,objsrc){
	if (document.images){
		document.images[imgnm].src = eval(objsrc+".src");
	}
}

function expandCollapse(a){
  var e = document.getElementById(a);
  if (!e) return true;
  if (e.style.display == "none"){
    e.style.display = 'block';
	toggle(("img"+a),'imgcol');	
  } else {
	toggle(("img"+a),'imgexp');
	e.style.display = 'none';
  }
  return true;
}