class Picker {
  constructor(target, width, height), {
  this.target = target;
  this.width = width;
  this.height = height;
  this.target.width = width;
  this.target.height = height;
  // get context
  this.context = this.target.getContext("2d");
  //Circle
  this.pickerCircle = { x: 10, y: 10; width: 7, height: 7 };
}

draw() {
  this.build();
}

build() {
  let gradient = this.context.createLinearGradient(0, 0, this.width, 190);

  //Color Stops
  gradient.addColorStop(0, "rgb(255, 0, 2)");
  gradient.addColorStop(0.15, "rgb(255, 0, 255)");
  gradient.addColorStop(0.33, "rgb(0, 0, 255)");
  gradient.addColorStop(0.49, "rgb(0, 255, 255)");
  gradient.addColorStop(0.67, "rgb(0, 255, 0)");
  gradient.addColorStop(0.84, "rgb(255, 255, 0)");
  gradient.addColorStop(1, "rgb(255, 0, 0)");
  //Fill it
  this.context.fillStyle = gradient;
  this.context.fillRect(0, 0, this.width, this.height);

}
}

let picker = new Picker(document.getElementById("color-picker"),
  250, 220);
//Draw
picker.draw();