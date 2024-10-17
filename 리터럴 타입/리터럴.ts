let 이름 :123;
//Literal types 하여 123만 들어올 수 있음
//버그 방지 가능~ 자동완성도 지원~

function 함수(a:'hello') :(1|0){
    return 1
}
함수('hello')
//리터럴 타입으로 어떤 값으로 리턴할지도 지정 가능

type A = '가위' | '보' | '바위';
function 퀴즈(x:A) :A[]{
    let array: A[];
    array.push(x)
    return array
}
퀴즈('가위')