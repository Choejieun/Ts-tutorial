var 이름 = 'kim';
//이 변수는 앞으로 '문자열'만 들어올 수 있습니다.
var 이름배열 = ['kim', 'park'];
//배열 안에 들어가는 자료도 지정해줘야 함
var 이름오브젝트 = { name: 'kim' };
//let 이름오브젝트 :{name? : string} = {name : 'kim'};
//오브젝트 타입을 지정해줘야함. 물음표를 넣어 다른 형태로 들어와도 오류 안나게 물음표
var 이름유니온 = 123;
var 타입기반 = 123;
//type alias 변수에 담아 지정된 유니온을 사용 가능
function 함수(x) {
    return x * 2;
}
var john = [123, true];
var johnObject = { name: 'kim', age: '123' };
//object에 타입지정해야할 속성이 너무 많으면
//글자로된 모든 object 속성의 타입은 :string
//귀찮게 하나하나 안 해도 됨
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
//class 타입 지정 가능
