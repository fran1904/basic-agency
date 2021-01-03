 // modal
  var modal = document.getElementById("myModal");
  var btn = document.querySelector(".myBtn");
  var span = document.getElementsByClassName("close")[0];
  

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


// light-dark theme js
window.onload = function adjustBrandColor(){
    if (window.location.pathname == "/about" || window.location.pathname == "/thinking") {
        document.querySelector('.logo-normal').style.display = "none"
        document.querySelector('.logo-pink').style.display = "block"
        document.querySelector('.ellipsis').style.display = "none"
        document.querySelector('.ellipsis-pink').style.display = "block"
        document.querySelector('.footer-logo').style.background = `url("/assets/img/footer-logo-bg-white.svg") left top / 7% no-repeat scroll`
    } else {
      document.querySelector('.logo-pink').style.display = "none"
      document.querySelector('.ellipsis-pink').style.display = "none"
      document.querySelector('.footer-logo').style.background = `url("/assets/img/footer-logo.svg") left top / 7% no-repeat scroll`
    }
}

// Image tabs JS
let imgOne = document.querySelector('.img-1')
let imgTwo = document.querySelector('.img-2')
let imgThree = document.querySelector('.img-3')
let imgFour = document.querySelector('.img-4')

imgOne.addEventListener('mouseover', foreground)
imgTwo.addEventListener('mouseover', foreground)
imgThree.addEventListener('mouseover', foreground)
imgFour.addEventListener('mouseover', foreground)

imgOne.addEventListener('mouseout', background)
imgTwo.addEventListener('mouseout', background)
imgThree.addEventListener('mouseout', background)
imgFour.addEventListener('mouseout', background)


function foreground(event){
    event.target.style.zIndex = "9999"
}

function background(event){
    event.target.style.zIndex = "1"
}

function showPic(event, pic) {
    let i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    document.getElementById(pic).style.display = "block";
  }


 