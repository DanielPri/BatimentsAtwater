
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
      }
  };
}

// Get the modal
var modal = document.getElementById('image-modal');

// Get the button that opens the modal
var btns = document.querySelectorAll('.img-fluid');

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];

// When the user clicks on a image, open the modal 
btns.forEach(function(btn){
    btn.addEventListener('click',function(){
        modal.style.display = "block";
        var image = btn.src.match(/\/555_\d+.jpg/); 
        image = "assets/img/Photos" + image;
        //document.getElementById('test').innerHTML = image;
        document.getElementById('modal-insert').src = image;
    })
})

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}