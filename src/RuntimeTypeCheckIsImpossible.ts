// 클래스로 만들면...

class Square {  // tagged union
  constructor(public width: number) {
  }
}

class Rectangle extends Square {
  constructor(public width: number, public height: number) {
    super(width);
  }
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    return shape.width * shape.height;  // Rectangle 타입
  } else {
    return shape.width * shape.width; // Square 타입
  }
}