var colorList = ['#eaeaea', '#cccccc', '#999999'];

function setup() {
  frameRate(3);
}

var c = (0, 126, 255);

function draw() {
  createCanvas(400, 400);
  noStroke();
  for (var x = 0; x < width; x += 54) {
    for (var y = 0; y < height; y += 54) {

      //colore 1
      if (mouseX < 200) {
        fill(lerpColor(color('#cbe3f3'), color('#84bde5'), frameCount / 10));
      } else {
        fill(lerpColor(color('#cfe7cf'), color('#8eca8c'), frameCount / 10));
      }
      quad(x, y + 27, x + 20, y + 34, x + 27, y + 14, x + 7, y + 7);

      //colore 2
      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(color(colorHex));
      quad(x + 20, y + 34, x + 27, y + 14, x + 34, y + 34, x + 27, y + 54);

      //colore 3

      if (mouseX < 200) {
        fill(lerpColor(color('#9caab9'), color('#163558'), frameCount / 10));


      } else {
        fill(lerpColor(color('#9fb1a3'), color('#1c4421'), frameCount / 10));

      }



      quad(x + 27, y + 14, x + 34, y + 34, x + 54, y + 27, x + 47, y + 7);
      //colore 4

      if (mouseX < 200) {
        fill(lerpColor(color('#9cbcd2'), color('#045f93'), frameCount / 10));
      } else {
        fill(lerpColor(color('#afcdb1'), color('#458945'), frameCount / 10));
      }
      quad(x + 7, y + 7, x + 27, y + 14, x + 47, y + 7, x + 27, y);
    }
  }


  for (var a = -27; a < width; a += 54) {
    for (var b = -27; b < height; b += 54) {

      //colore 1
      if (mouseX < 200) {
        fill(lerpColor(color('#cbe3f3'), color('#84bde5'), frameCount / 10));
      } else {
        fill(lerpColor(color('#cfe7cf'), color('#8eca8c'), frameCount / 10));
      }
      quad(a, b + 27, a + 20, b + 34, a + 27, b + 14, a + 7, b + 7);

      //colore 2
      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(color(colorHex));
      quad(a + 20, b + 34, a + 27, b + 14, a + 34, b + 34, a + 27, b + 54);

      //colore 3
      if (mouseX < 200) {
        fill(lerpColor(color('#9caab9'), color('#163558'), frameCount / 10));
      } else {
        fill(lerpColor(color('#9fb1a3'), color('#1c4421'), frameCount / 10));
      }
      quad(a + 27, b + 14, a + 34, b + 34, a + 54, b + 27, a + 47, b + 7);

      //colore 4
      if (mouseX < 200) {
        fill(lerpColor(color('#9cbcd2'), color('#045f93'), frameCount / 10));
      } else {
        fill(lerpColor(color('#afcdb1'), color('#458945'), frameCount / 10));
      }
      quad(a + 7, b + 7, a + 27, b + 14, a + 47, b + 7, a + 27, b);
    }
  }
}