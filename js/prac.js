class Rectangle {
  constructor(length, width, color) {
    this.length = length;
    this.width = width;
    this.color = color;
  }

  area() {
    return this.length * this.width;
  }
  paint() {
    return `Painting the rectangle with color ${this.color}`;
  }
}

let rect = new Rectangle(10, 5, "red");
console.log(rect.area());
console.log(rect.paint());

const map = new Map();
map.set("Name", "Sahil");
console.log(map.get("Name"));

let curr = new Date();
console.log(curr.toLocaleDateString());
