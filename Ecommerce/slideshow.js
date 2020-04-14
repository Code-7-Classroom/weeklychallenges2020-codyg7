// slideshow

var i = 0; //starting point of index
var images = []; //variable of images with an empty array
var time = 3000; //time in ms between each picture

//array list with image paths
images[0] =
  "https://azzurrokids.nl/wp-content/uploads/2019/05/yeezy-raffle-banner.jpg";
images[1] =
  "https://d2eohwa6gpdg50.cloudfront.net/content/uploads/2018/10/10141423/CHH_Rimowa_OW-White_PF_Belt_orangeWheels1_1920x600_acf_cropped.jpg";
images[2] =
  "https://www.kicksonfire.com/wp-content/uploads/2015/11/adidas-Yeezy-Boost-350-Moonrock-Lead.jpg";
images[3] =
  "https://www.omeroabbigliamento.com/wp-content/uploads/2018/05/The-North-Face-Streetwear-Black-Label-banner.jpg";
images[4] =
  "https://www.premierpress.com/wp-content/uploads/2019/03/Adidas-Cookies-and-Cream-Website-Banner-Image-with-Fade.jpg";
images[5] = "https://wallpaperaccess.com/full/135377.jpg";
images[6] =
  "https://hips.hearstapps.com/esq.h-cdn.co/assets/17/29/1500385858-supreme.jpg";

//function to change the image
function changeImg() {
  if (i < images.length - 1) {
    i++; //incrementing by one
  } else {
    i = 0; //resetting to 0 when done with the array
  }
  document.slide.src = images[i]; //getting name attribute from html setting to first image
  setTimeout("changeImg()", time);
}

window.onload = changeImg;
