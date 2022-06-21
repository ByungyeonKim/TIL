function 참새() {
  this.날개개수 = 2;
  this.날수있나 = true;
}
const 참새1 = new 참새();

console.log('---------참새---------');
console.log(`참새의 날개 개수 : ${참새1.날개개수}`);

function 닭() {
  this.벼슬 = true;
}
닭.prototype = 참새1; // reference (오른쪽이 함수가 아닌 인스턴스이다.
// 이는 이미 존재하는 사물을 통해 범주화한다는 점에서 프로토타입 이론과 일치한다.)
const 닭1 = new 닭();

console.log('\n---------닭---------');
console.log(`닭1 날개 개수 : ${닭1.날개개수}, 날 수 있나? : ${닭1.날수있나}`);

닭1.날수있나 = false; // 같은 속성을 변경해도 프로토타입 객체(참새)의 속성은 변경되지 않는다.

console.log(`다시 물어볼게. 닭1은 날 수 있나? : ${닭1.날수있나}`);
console.log(닭.prototype);

// 닭1의 원형(프로토타입)은 참새1이다.
// 닭1에 없는 속성(날개개수, 날수있나)은 프로토타입 체인을 통해 참조된다.
// 닭1에 동일한 속성명(날수있나)을 추가해도 원형은 변하지 않는다.(위임)
// 원리적으로는 닭1을 통해 원형(프로토타입)을 변경하는건 불가능해야 한다.
// 하지만 JS에선 문법적으로 가능하다.(권장하지 않음)

// ⬇️ 고전적인 방식의 프로토타입 연결 ⬇️
// 객체 생성을 통해 확장한다는 부분이 좀 더 직관적이다.
console.log('\n---------펭귄---------');
function 펭귄() {
  참새.call(this); // 속성들 복사
}
펭귄.prototype = Object.create(참새.prototype); // 프로토타입 연결
const 펭귄1 = new 펭귄();

console.log(`펭귄1 날개 : ${펭귄1.날개개수}, 날 수 있나? : ${펭귄1.날수있나}`);

펭귄1.날수있나 = false;

console.log(`다시 물어볼게. 펭귄1은 날 수 있나? : ${펭귄1.날수있나}`);
