const 소개 = {
  이름: '홍길동',
  지역: '서울',
  강아지: {
    이름: '초코',
  },
};

const 고양이이름 = 소개.고양이?.이름;
console.log(고양이이름);
// undefined
console.log(소개.존재하지않는메소드?.());
// undefined
console.log(소개.강아지.이름);
// 초코
