var toggleQrcode;


toggleQrcode = function() {
  var className, classes, el, existingIndex;
  el = document.querySelectorAll(".qrcode img")[0];
  className = "show";
  if (el.classList) {
    el.classList.toggle(className);
  } else {
    classes = el.className.split(' ');
    existingIndex = classes.indexOf(className);
    if (existingIndex >= 0) {
      classes.splice(existingIndex, 1);
    } else {
      classes.push(className);
    }
    el.className = classes.join(' ');
  }
};

document.querySelectorAll(".qrcode .icon")[0].addEventListener("click", function() {
  return toggleQrcode();
});

document.querySelectorAll(".qrcode img")[0].addEventListener("click", function() {
  return toggleQrcode();
});
