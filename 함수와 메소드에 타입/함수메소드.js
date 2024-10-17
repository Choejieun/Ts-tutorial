//이 함수는 string를 받고, number을 뱉는다.
//함수탕비은 ()=>{} 모양으로
var 함수타입실험용 = function (a) {
    return 10;
};
//함수 표현식에만 type alias 사용가능
var dasf보 = {
    name: 'kim',
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function (a) { }
};
dasf보.plusOne('gd');
var 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
회원정보.plusOne(1);
회원정보.changeName();
var cutZero = function (a) {
    return a.replace(/^0+/, "");
};
console.log(cutZero('012'));
var removeDash = function (a) {
    return a.replace(/-/g, "");
};
console.log(removeDash('010-4484-7684'));
// (숙제3) 함수에 함수를 집어넣고 싶습니다.
// 숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 
// 이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
// 1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
// 2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
// 3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 
// 이 함수는 어떻게 만들면 될까요?
// 둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다
function 메소드숙제마지막(a, b, c) {
    var 둘째결과 = b(a);
    var 최종결과 = c(둘째결과);
    return 최종결과 + '끝입니당';
}
console.log(메소드숙제마지막('010-1111-2222', cutZero, removeDash));
