


var hamburger = document.querySelector(".hamburger");
var signup = document.querySelector(".signup-btn");
var mobilesignup = document.querySelector(".mobile-signup-btn");
var mobilelist = document.querySelector(".main-site-nav-list-mobile");
var signupoverlay = document.querySelector(".signup-overlay");
var closebutton = document.querySelector(".close");

if(hamburger!=null) {



hamburger.addEventListener("click", function () {
    if (hamburger.className === "hamburger") {
        hamburger.className += " open";
        mobilelist.className += " show";
    } else {
        hamburger.className = "hamburger";
        mobilelist.className = "main-site-nav-list-mobile";
    }
});

signup.addEventListener("click", function () {
    if (signupoverlay.className === "signup-overlay") {
        signupoverlay.className += " open";
    } else {
        signupoverlay.className = "signup-overlay";
    }
});

mobilesignup.addEventListener("click", function () {
    if (signupoverlay.className === "signup-overlay") {
        signupoverlay.className += " open";
    } else {
        signupoverlay.className = "signup-overlay";
    }
});

closebutton.addEventListener("click", function () {
    signupoverlay.className = "signup-overlay";
    // console.log("closed clicked");
});

}

// // remove function binding
// slider.events.off('transitionEnd', updateProgressBar);



var upButton = document.querySelector(".scroll-up-btn");
var downButton = document.querySelector(".scroll-down-btn");
var nameWheel = document.querySelector(".name-list");

if (upButton != null) {
    upButton.addEventListener("click", function () {
        nameWheel.scrollBy(0, -54);
    });

    downButton.addEventListener("click", function () {
        nameWheel.scrollBy(0, 54);
    });
}


//svg shit needs to be refactored with DOM bubiling stuff



var topRight = document.querySelector(".top-right-btn");
var topRightContainer = document.querySelector(".top-right");

var middleRight = document.querySelector(".middle-right-btn");
var middleRightContainer = document.querySelector(".middle-right");

var middleLeft = document.querySelector(".middle-left-btn");
var middleLeftContainer = document.querySelector(".middle-left");

var bottomLeft = document.querySelector(".bottom-left-btn");
var bottomLeftContainer = document.querySelector(".bottom-left");

var bottomRight = document.querySelector(".bottom-right-btn");
var bottomRightContainer = document.querySelector(".bottom-right");

var bottomMiddle = document.querySelector(".bottom-middle-btn");
var bottomMiddleContainer = document.querySelector(".bottom-middle");

if(topRight != null) {

    // topLeft.addEventListener("mouseenter", function(){
        
    //     // topLeftContainer.style.display = "none";
    //     topLeftContainer.style.visibility = "visible";
        
    // });

    // topLeft.addEventListener("mouseleave", function(){
    //     topLeftContainer.style.visibility = "hidden";
    // });

    topRight.addEventListener("mouseenter", function(){
        
        // topLeftContainer.style.display = "none";
        topRightContainer.style.visibility = "visible";
    });

    topRight.addEventListener("mouseleave", function(){
        topRightContainer.style.visibility = "hidden";
        
    });

    bottomLeft.addEventListener("mouseenter", function(){
        
        // topLeftContainer.style.display = "none";
        bottomLeftContainer.style.visibility = "visible";
    });

    bottomLeft.addEventListener("mouseleave", function(){
        bottomLeftContainer.style.visibility = "hidden";
    });

    bottomRight.addEventListener("mouseenter", function(){
        
        // topLeftContainer.style.display = "none";
        bottomRightContainer.style.visibility = "visible";
    });

    bottomRight.addEventListener("mouseleave", function(){
        bottomRightContainer.style.visibility = "hidden";
    });

    middleRight.addEventListener("mouseenter", function(){
        
        // topLeftContainer.style.display = "none";
        middleRightContainer.style.visibility = "visible";
    });

    middleRight.addEventListener("mouseleave", function(){
        middleRightContainer.style.visibility = "hidden";
    });

    middleLeft.addEventListener("mouseenter", function(){
        
        // topLeftContainer.style.display = "none";
        middleLeftContainer.style.visibility = "visible";
    });

    middleLeft.addEventListener("mouseleave", function(){
        middleLeftContainer.style.visibility = "hidden";
    });

    bottomMiddle.addEventListener("mouseenter", function(){
        
        // topLeftContainer.style.display = "none";
        bottomMiddleContainer.style.visibility = "visible";
    });

    bottomMiddle.addEventListener("mouseleave", function(){
        bottomMiddleContainer.style.visibility = "hidden";
    });
}

//onesource model 


var liItem1 = document.querySelector(".step-1");
var layer1 = document.querySelector(".layer1");

var liItem2 = document.querySelector(".step-2");
var layer2 = document.querySelector(".layer2");

var liItem3 = document.querySelector(".step-3");
var layer3 = document.querySelector(".layer3");

var liItem4 = document.querySelector(".step-4");
var layer4 = document.querySelector(".layer4");

if (liItem1 != null) {
    liItem1.addEventListener("mouseenter", function(){
        layer1.style.transform = "translateX(120px)";
        
    });
    liItem1.addEventListener("mouseleave", function(){
        layer1.style.transform = "translateX(0px)";
    });

    liItem2.addEventListener("mouseenter", function(){
        layer2.style.transform = "translateX(120px)";
        
    });
    liItem2.addEventListener("mouseleave", function(){
        layer2.style.transform = "translateX(0px)";
    });

    liItem3.addEventListener("mouseenter", function(){
        layer3.style.transform = "translateX(120px)";
        
    });
    liItem3.addEventListener("mouseleave", function(){
        layer3.style.transform = "translateX(0px)";
    });

    liItem4.addEventListener("mouseenter", function(){
        layer4.style.transform = "translateX(120px)";
        
    });
    liItem4.addEventListener("mouseleave", function(){
        layer4.style.transform = "translateX(0px)";
    });
    
}




