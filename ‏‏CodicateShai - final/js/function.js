
functionScroll();

function functionScroll() {
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header_desktop_top").style.display = "none";
         
  } else {
    //document.getElementById("header_desktop_top").style.display = "flex";
    if (window.innerWidth>1070) {
        document.getElementById("header_desktop_top").style.display = "flex";
      }
      else {
        document.getElementById("header_desktop_top").style.display = "block";
      }
  }
}

}

function fClickButtton(message){
    alert('Message: '+message) ;
}


function fClickMessageSticky(){
    document.getElementById("messageSticky").style.height= "70px";
    document.getElementById("messageSticky").style.width= "70px";
    document.getElementById("messageSticky").style.background= "#8f00fe";
    alert("You click on Message Sticky.");
}

function fClickBars(){
  document.getElementById("header_nav_bars").style.display = "none";
  document.getElementById("header_nav_top").style.display = "block";
}

  
