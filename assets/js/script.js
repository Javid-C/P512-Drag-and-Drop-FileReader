let options = document.querySelectorAll(".option");
let abouts = document.querySelectorAll(".about");

// let lastbox = document.querySelectorAll(".about").item(0);
// options.forEach((option) => {
//   option.addEventListener("click", function () {
//     // abouts.forEach((about) => {
//     //   about.classList.add("d-none");
//     // });
//     if (lastbox) {
//       lastbox.classList.add("d-none");
//     }
//     let dataId = option.getAttribute("data-id");
//     let about = document.getElementById(dataId);
//     about.classList.remove("d-none");
//     lastbox = about;
//   });
// });

let bubble = document.querySelector(".bubble");

let container = document.querySelector(".container");

let wrapper = document.querySelector(".wrapper");

// wrapper.addEventListener("click", function () {
//   console.log("wrapper clicked");
// });

// bubble.addEventListener("click", function (e) {
//   console.log(e.target);
// });

// container.addEventListener("click", (e) => {
//   console.log(e.target);
// });

let input = document.querySelector(".firstname");

// input.onblur = function () {
//   console.log("you clicked outside");
// };

// input.onfocus = function () {
//   console.log("you focus the input");
// };

// input.onchange = function () {
//   console.log("okay");
// };

// let upload = document.querySelector(".upload");

// upload.onchange = function () {
//   console.log("changed");
// };

input.onkeypress = function (e) {
  console.log(e);
};

// let form = document.getElementById("form");

// form.onsubmit = function (e) {
//   e.preventDefault();
//   console.log("okay");
// };
