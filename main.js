console.log("Hey");
const images = document.querySelectorAll("img");
const centerDiv = document.querySelector(".centerDiv");
const centerPic = document.querySelector(".centerPic");
const body = document.body;
const btn = document.querySelector("#btn");

const imageLinks = [
  "images/alora-griffiths-WX7FSaiYxK8-unsplash.jpg",
  "images/bruno 2.jpg",
  "images/connor-coyne-OgqWLzWRSaI-unsplash.jpg",
  "images/jonathan-chng-3R4vPrSB1c4-unsplash.jpg",
  "images/lindsay-henwood-7_kRuX1hSXM-unsplash.jpg",
  "images/victor-freitas-qZ-U9z4TQ6A-unsplash.jpg",
  "images/tyler-nix-Y1drF0Y3Oe0-unsplash.jpg",
  "images/sven-kucinic-Z0KjmjxUsKs-unsplash.jpg",
  "images/stephen-baker-QAX5Ylx-lKo-unsplash.jpg",
  "images/logan-weaver-lgnwvr-CS9ptdGhE0M-unsplash.jpg",
];

let count = -1;

const showCenterDiv = () => {
  centerDiv.style.display = "flex";
  positionCenter();
};


const positionCenter = () => {
  console.log("clicked image");
  count++;
  for (let i = 0; i < imageLinks.length; i++) {
    if (count < imageLinks.length) {
      centerPic.src = imageLinks[count];
      centerPic.style.display = "block";
      centerDiv.style.zIndex = "100";
      centerDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      btn.style.display ="block"
      console.log(count);
      // console.log(centerDiv);
    } else {
      count = 0;
    }
  }
};

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", showCenterDiv);
}

btn.addEventListener("click", () => {
  // count++;
  centerDiv.style.display = "none";


  console.log("cancel Clicked");
});
