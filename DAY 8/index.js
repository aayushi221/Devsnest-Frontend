// "use strict"
const divs = document.querySelectorAll(".square");
//selected all the small boxes

const leave = [
  130, 131, 149, 150, 151, 152, 168, 169, 170, 171, 172, 173, 187, 188, 190,
  191, 193, 194, 207, 208, 209, 210, 211, 212, 213, 214, 229, 232, 248, 250,
  251, 253, 267, 269, 272, 274,
];
//all the places where boxes are white

Array.from(divs).forEach((div, i) => {
  if (leave.includes(i + 1)) div.style.background = "white";
}); //turning all the leaves position white

Array.from(divs).forEach((div, i) => {
  div.addEventListener("click", () => {
    div.style.background =
      div.style.background == "white" ? "rgb(223,53,53)" : "white";
    //on click it will turn red boxes white and white boxes red
  });
});
