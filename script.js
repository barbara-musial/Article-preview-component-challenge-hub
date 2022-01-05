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
    outline.style.gridTemplateRows = "240px 272px";

    drawersImage.style.width = "340px";
    drawersImage.style.height = "240px";
    drawersImage.style.borderRadius = "10px 10px 0  0";

    author.style.marginTop = "30px";
    text.style.padding = "25px 25px 10px 25px";

    tooltip.style.top = "-10px";
    tooltip.style.right = "-25px";
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
    outline.style.margin = null;
    outline.style.width = null;
    outline.style.gridTemplateColumns = null;
    outline.style.gridTemplateRows = null;

    drawersImage.style.width = null;
    drawersImage.style.height = null;
    drawersImage.style.borderRadius = null;

    author.style.marginTop = null;

    tooltip.style.top = null;
    tooltip.style.right = null;
    tooltip.style.width = null;
    tooltip.style.height = null;
    tooltip.style.borderRadius = null;
    tooltip.style.fontSize = null;
    tooltip.style.textAlign = null;
    tooltip.style.paddingLeft = null;
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

document.addEventListener("click", function (event) {
  if (!shareIcon.contains(event.target)) {
    tooltip.style.visibility = "hidden";
  }
});
