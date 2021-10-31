interface Square {
  width: number;
}

interface Rectangle extends Square {
  height: number;
}

type Shape = Square | Rectangle;

// function calculateArea(shape: Shape) {
//   if (shape instanceof Rectangle) { // 인터페이스 형식이 아닌 값으로 인식된다.
//     return shape.width * shape.height;  // 당연히 Rectangle의 height도 인식 불가
//   } else {
//     return shape.width * shape.width;
//   }
// }