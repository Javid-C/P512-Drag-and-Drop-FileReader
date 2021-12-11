// let tasks = document.querySelectorAll(".task");
// let dropZones = document.querySelectorAll(".dropZone");

// tasks.forEach((task) => {
//   task.addEventListener("drag", function () {
//     console.log("item is dragging");
//     // setTimeout(() => {
//     //   tasks.forEach((task) => {
//     //     task.style.zIndex = "-5";
//     //   });
//     // }, 1000);
//   });
//   task.addEventListener("dragstart", function (e) {
//     e.dataTransfer.setData("text", e.target.id);
//   });
//   //   task.addEventListener("dragend", function () {
//   //     console.log("drag is finished");
//   //   });
// });

// dropZones.forEach((zone) => {
//   zone.addEventListener("dragenter", function () {});
//   zone.addEventListener("dragleave", function () {
//     zone.style.boxShadow = "none";
//   });
//   zone.addEventListener("dragover", function (e) {
//     e.preventDefault();
//     zone.style.boxShadow = "0px 0px 34px -12px #000000";
//     // console.log("you are in drop zone right now");
//   });
//   zone.addEventListener("drop", function (e) {
//     let id = e.dataTransfer.getData("text");
//     let task = document.getElementById(id);
//     let dropedTask = zone.appendChild(task);
//     zone.style.boxShadow = "none";

//     console.log(dropedTask);
//   });
// });

let upload = document.querySelector(".upload");
let images = document.querySelector(".images");

upload.addEventListener("change", function (e) {
  let files = Array.from(e.target.files);

  files.forEach((file) => {
    showImage(file);
  });
});

function showImage(file) {
  const fileReader = new FileReader();

  fileReader.readAsDataURL(file);

  fileReader.addEventListener("loadend", function () {
    let div = document.createElement("div");
    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.className = "btn btn-outline-danger";
    div.className = "col-lg-4 ms-2";
    div.classList.add("show");
    let img = document.createElement("img");
    img.src = fileReader.result;
    img.style.width = "70%";
    img.style.borderRadius = "5px";

    btn.addEventListener("click", function () {
      let conf = confirm("Are you sure about that delete file?");
      if (conf) {
        div.remove();
      }
    });

    div.append(img, btn);
    images.append(div);
  });
}
