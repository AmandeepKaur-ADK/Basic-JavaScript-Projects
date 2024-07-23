let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  let rgbValue = document.querySelector("#rgbValue");
  let value = document.querySelector("#hexColor");
  let hexArray = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    let value = Math.floor(Math.random() * hexArray.length);
    hex += hexArray[value];
  }
  let RGB = convertRGB(hex);
  rgbValue.innerHTML = "RGB Color: " + RGB;
  value.innerHTML = "Hex Color: " + hex;
  document.getElementById("body").style.backgroundColor = hex;
});

function convertRGB(hexValue) {
  let red = hexValue.slice(1, 3);
  let green = hexValue.slice(3, 5);
  let blue = hexValue.slice(5, 7);
  console.log(red, green, blue);
  red = Number("0x" + red);
  green = Number("0x" + green);
  blue = Number("0x" + blue);
  return "(" + red + "," + green + "," + blue + ")";
}
