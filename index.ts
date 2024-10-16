let 이름 :string = 'kim';
//이 변수는 앞으로 '문자열'만 들어올 수 있습니다.

let 이름배열 :string[] = ['kim','park'];
//배열 안에 들어가는 자료도 지정해줘야 함

let 이름오브젝트 :{name : string} = {name : 'kim'};
//let 이름오브젝트 :{name? : string} = {name : 'kim'};
//오브젝트 타입을 지정해줘야함. 물음표를 넣어 다른 형태로 들어와도 오류 안나게 물음표

let 이름유니온 :string|number = 123;
//다양한 타입으로 들어오게 하기

type Name = string|number;
let 타입기반 :Name = 123;
//type alias 변수에 담아 지정된 유니온을 사용 가능

function 함수(x :number) :number{
    return x * 2
}
//함수에 타입지정하기
//이 함수는 파라미터로 number, return 값으로 number

type Member = [number, boolean];
let john :Member = [123,true];
//array에 쓸 수 있는 tuple(튜플) 타입
//이 함수는 무조건 첫번째는 number, 둘째는 boolean 타입이어야 함

type MemberObject = {
    [key :string] :string,
};
let johnObject : MemberObject = {name : 'kim', age : '123'};
//object에 타입지정해야할 속성이 너무 많으면
//글자로된 모든 object 속성의 타입은 :string
//귀찮게 하나하나 안 해도 됨

class User{
    name :string;
    constructor(name :string){
        this.name = name;
    }
}
//class 타입 지정 가능
