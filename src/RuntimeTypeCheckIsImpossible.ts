// 태그 기법

interface Square {  // tagged union
  kind: 'square';
  width: number;
}

interface Rectangle {
  kind: 'rectangle';
  height: number;
  width: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape.kind === 'rectangle') {
    return shape.width * shape.height;  // Rectangle 타입
  } else {
    return shape.width * shape.width; // Square 타입
  }
}