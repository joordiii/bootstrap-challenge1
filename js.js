function launchTimeline() {
  var inputBoxTitle = document.getElementById('chatinput-title');
  document.getElementById('printchatbox-title').innerHTML = inputBoxTitle.value;
  var inputBoxContent = document.getElementById('chatinput-content');
  document.getElementById('printchatbox-content').innerHTML = inputBoxContent.value;
}

function launchTimeline2() {
  var inputBoxTitle2 = document.getElementById('chatinput-title2');
  document.getElementById('printchatbox-title2').innerHTML = inputBoxTitle2.value;
  var inputBoxContent2 = document.getElementById('chatinput-content2');
  document.getElementById('printchatbox-content2').innerHTML = inputBoxContent2.value;
}

function clearOnLoad() {
  document.getElementById('printchatbox-title').innerHTML = "";
  document.getElementById('chatinput-title').value = "";
  document.getElementById('printchatbox-content').innerHTML = "";
  document.getElementById('chatinput-content').value = "";
  document.getElementById('printchatbox-title2').innerHTML = "";
  document.getElementById('chatinput-title2').value = "";
  document.getElementById('printchatbox-content2').innerHTML = "";
  document.getElementById('chatinput-content2').value = "";
}
window.onload = clearOnLoad;

function toggle_visibility1() {
  var e = document.getElementById('card11');
  if(e.style.visibility == 'hidden')
    e.style.visibility = 'visible';
  else
    e.style.visibility = 'hidden';
  var semi1 = document.getElementById('semicircle1');
  if(semi1.style.visibility == 'hidden')
    semi1.style.visibility = 'visible';
  else
    semi1.style.visibility = 'hidden';
  /* var semi2 = document.getElementById('semicircle2');
  if(semi2.style.visibility == 'hidden')
    semi2.style.visibility = 'visible';
  else
    semi2.style.visibility = 'hidden'; */
  var arrowRight = document.getElementById('pointer-space-right');
  if(arrowRight.style.visibility == 'hidden')
    arrowRight.style.visibility = 'visible';
  else
    arrowRight.style.visibility = 'hidden';
}

function toggle_visibility2() {
  var e = document.getElementById('card22');
  if(e.style.visibility == 'hidden')
    e.style.visibility = 'visible';
  else
    e.style.visibility = 'hidden';
  /* var semi1 = document.getElementById('semicercle3');
  if(semi1.style.visibility == 'hidden')
    semi1.style.visibility = 'visible';
  else
    semi1.style.visibility = 'hidden';*/
  var semi2 = document.getElementById('semicircle2');
  if(semi2.style.visibility == 'hidden')
    semi2.style.visibility = 'visible';
  else
    semi2.style.visibility = 'hidden'; 
  var arrowLeft = document.getElementById('pointer-space-left');
  if(arrowLeft.style.visibility == 'hidden')
    arrowLeft.style.visibility = 'visible';
  else
    arrowLeft.style.visibility = 'hidden';
}

function addBorder1() {
  var addingBorder = document.getElementById("center-col-left").classList;
  if (addingBorder.contains("white")) {
      addingBorder.remove("white");
  } else {
      addingBorder.add("gray");
  }
}

/* function addBorder2() {
  var addingBorder = document.getElementById("center-col-left2").classList;
  if (addingBorder.contains("white")) {
      addingBorder.remove("white");
  } else {
      addingBorder.add("gray");
  }
} */

function addBorder3() {
  var addingBorder = document.getElementById("left-cont").classList;
  if (addingBorder.contains("white")) {
      addingBorder.remove("white");
  } else {
      addingBorder.add("blue");
  }
}

function addBorder4() {
  var addingBorder4 = document.getElementById("right-cont").classList;
  if (addingBorder4.contains("qwer")) {
      addingBorder4.remove("qwer");
  } else {
      addingBorder4.add("blue-left");
  }
}