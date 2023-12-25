// script for controlling the dropdown
let dropdown = document.getElementById("nav03");
const CheckDropdown = () => {
  let e = dropdown.getAttribute("class");
  console.log(typeof e);
  if (e == "nav_03") {
    dropdown.classList.remove("nav_03");
    console.log("if is work");
  } else {
    console.log("else  is work");
    dropdown.classList.add("nav_03");
  }
};
