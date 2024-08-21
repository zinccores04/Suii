document.addEventListener("DOMContentLoaded", function() {
    var i = 0;
    var images = [];
    var time = 3500; // Time between image changes (in milliseconds)

    images[0] = "./images/b1g1.jpg";
    images[1] = "./images/by1g1.jpg";

    function changeImg() {
        var slideElement = document.getElementById("silde");
        console.log(slideElement); // This should log the image element

        slideElement.src = images[i]; // Update the src attribute

        if (i < images.length - 1) {
            i++;
        } else {
            i = 0;
        }

        setTimeout(changeImg, time);
    }

    // Start the slideshow
    changeImg();
});

document.addEventListener("DOMContentLoaded", function() {
    var i = 0;
    var images = [];
    var time = 4000; // Time between image changes (in milliseconds)

    images[0] = "./images/subscription.webp";
    images[1] = "./images/sub (3).jpg";

    function changeImg() {
        var slideElement = document.getElementById("silde1");
        console.log(slideElement); // This should log the image element

        slideElement.src = images[i]; // Update the src attribute

        if (i < images.length - 1) {
            i++;
        } else {
            i = 0;
        }

        setTimeout(changeImg, time);
    }

    // Start the slideshow
    changeImg();
});

document.addEventListener("DOMContentLoaded", function() {
    var i = 0;
    var images = [];
    var time = 4000; // Time between image changes (in milliseconds)

    images[0] = "./images/accessories.jfif";
    images[1] = "./images/dis.jpg";

    function changeImg() {
        var slideElement = document.getElementById("silde2");
        console.log(slideElement); // This should log the image element

        slideElement.src = images[i]; // Update the src attribute

        if (i < images.length - 1) {
            i++;
        } else {
            i = 0;
        }

        setTimeout(changeImg, time);
    }

    // Start the slideshow
    changeImg();
});