"use strict";

const outline = document.querySelector(".outline");
const drawersImage = document.querySelector(".drawers-image");
const text = document.querySelector(".text");
const author = document.querySelector(".author");
const shareIcon = document.querySelector(".share-icon");
const tooltip = document.querySelector(".tooltip");
const styleTag = document.createElement("style");

const changeStyle = function () {
  if (window.innerWidth <= 700) {
    outline.style.margin = "150px auto";
    outline.style.width = "340px";
    outline.style.gridTemplateColumns = "340px";
    outline.style.gridTemplateRows = "240px 280px";

    drawersImage.style.width = "340px";
    drawersImage.style.height = "240px";
    drawersImage.style.borderRadius = "10px 10px 0  0";

    author.style.marginTop = "30px";

    tooltip.style.top = "-10px";
    tooltip.style.right = "-35px";
    tooltip.style.width = "310px";
    tooltip.style.height = "66px";
    tooltip.style.borderRadius = "0 0 10px 10px";
    tooltip.style.fontSize = "15px";
    tooltip.style.textAlign = "left";
    tooltip.style.paddingLeft = "30px";
    styleTag.innerHTML =
      ".tooltip::after{border-width:0}.tooltip img{margin-top: 25px}";
    document.head.insertAdjacentElement("beforeend", styleTag);
  } else {
    outline.style.margin = "300px auto";
    outline.style.width = "660px";
    outline.style.gridTemplateColumns = "260px 400px";
    outline.style.gridTemplateRows = "auto";

    drawersImage.style.width = "260px";
    drawersImage.style.height = "253px";
    drawersImage.style.borderRadius = "10px 0  0 10px";

    author.style.marginTop = "20px";

    tooltip.style.top = "-55px";
    tooltip.style.right = "-77px";
    tooltip.style.width = "200px";
    tooltip.style.height = "35px";
    tooltip.style.borderRadius = "8px";
    tooltip.style.fontSize = "10px";
    tooltip.style.textAlign = "center";
    tooltip.style.paddingLeft = "0";
    styleTag.innerHTML =
      ".tooltip::after{border-width: 8px}.tooltip img{margin-top: 7.5px}";
    document.head.insertAdjacentElement("beforeend", styleTag);
  }
};
changeStyle();

window.addEventListener("resize", changeStyle);

shareIcon.addEventListener("click", function () {
  tooltip.style.visibility = "visible";
});
