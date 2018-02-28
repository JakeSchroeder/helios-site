if(document.querySelector(".my-slider") != null) {
  var sliderHome = tns({
    container: '.my-slider',
    // mode: 'gallery',
    items: 1,
    slideBy: 1,
    autoplay: false,
    autoHeight: false,
    controls: false,
    autoplayButtonOutput: false,
    autoplayTimeout: 5000,
    speed: 300,
    loop: true
  });
}

if(document.querySelector(".my-slider-resources") != null) {

  

var sliderResources = tns({
  container: '.my-slider-resources',
  nav: false,
  axis: "vertical",
  items: 1,
  slideBy: 1,
  autoplay: false,
  autoHeight: false,
  controls: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 5000,
  speed: 300,
  loop: false,
  controlsContainer: ".slide-controls",
});

var sliderInner = document.querySelector(".tns-inner");
  sliderInner.style.height = "height: 476px;";

}



// var info = slider.getInfo()
// console.log("slide changed");

// var progressBar = document.querySelector(".bar");

// var slideChange = function () {

//   var percentage = 100;

//   var currentPercentage = progressBar.value;

//   var updateBar = setInterval(function () {
    
//     if (currentPercentage > percentage) {
//       currentPercentage = 0;
//       clearInterval(updateBar);
      
      
//     }
//     progressBar.value = currentPercentage++;
//   }, 50);

// }

// slideChange();

// slider.events.on("indexChanged", slideChange);

// var progressBar = document.querySelector(".bar");
// var updateProgressBar = function() {
//     var percentage = 100;
//     var curr = progressBar.value;
//     var update = setInterval(function() {
//       if (curr > percentage) {
//         clearInterval(update);
//       }
//       progressBar.value = curr++;
//     }, 100)
//   }

  // bind function to event
// slider.events.on('transitionStart', updateProgressBar);