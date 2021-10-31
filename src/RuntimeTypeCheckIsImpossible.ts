interface Square {
  width: number;
}

interface Rectangle extends Square {
  height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if ('height' in shape) { // 차라리 Rectangle의 속성인 height가 있는지 확인
    return shape.width * shape.height;  // 타입 체커의 보정
  } else {
    return shape.width * shape.width;
  }
}